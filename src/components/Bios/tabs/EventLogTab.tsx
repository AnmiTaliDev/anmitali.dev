'use client';

import { useEffect, useState } from 'react';
import fieldStyles from './Field.module.css';
import listStyles from './List.module.css';
import styles from './EventLogTab.module.css';
import { renderMarkdown } from '@/lib/markdown';
import { BlogPost } from '@/types';

const RAW_COLORS = ['#39ff14', '#ffe600', '#ff2b2b', '#ff00ff', '#00fff2'];

interface EventLogTabProps {
  posts: BlogPost[];
  onViewingChange: (viewing: boolean) => void;
  onHelpChange: (text: string) => void;
}

export default function EventLogTab({ posts, onViewingChange, onHelpChange }: EventLogTabProps) {
  const [selected, setSelected] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formatted, setFormatted] = useState(false);

  useEffect(() => {
    onViewingChange(openIndex !== null);
  }, [openIndex, onViewingChange]);

  useEffect(() => {
    if (openIndex === null) {
      onHelpChange(posts.length > 0 ? posts[selected].excerpt : 'No log entries yet.');
    }
  }, [selected, openIndex, posts, onHelpChange]);

  useEffect(() => {
    if (openIndex !== null) {
      onHelpChange(
        formatted
          ? 'Rendered view of this log entry.'
          : 'Raw, unformatted log dump. Press Format Log for a readable version.'
      );
    }
  }, [openIndex, formatted, onHelpChange]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (openIndex !== null) {
        if (event.key === 'Escape') {
          setOpenIndex(null);
          setFormatted(false);
        }
        return;
      }

      if (posts.length === 0) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelected((prev) => (prev + 1) % posts.length);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelected((prev) => (prev - 1 + posts.length) % posts.length);
      }
      if (event.key === 'Enter') {
        setOpenIndex(selected);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, openIndex, posts.length]);

  if (openIndex !== null) {
    const post = posts[openIndex];
    const rawLines = post.content.split('\n').filter((line) => line.trim() !== '');

    return (
      <div>
        <div className={styles.toolbar}>
          <div className={fieldStyles.sectionTitle}>
            {post.date} :: {post.title}
          </div>
          <button className={styles.formatButton} onClick={() => setFormatted((prev) => !prev)}>
            {formatted ? 'Show Raw Log' : 'Format Log'}
          </button>
        </div>

        {formatted ? (
          <div
            className={styles.formatted}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        ) : (
          <div className={styles.rawLog}>
            {rawLines.map((line, index) => (
              <div
                key={index}
                className={styles.rawLine}
                style={{ color: RAW_COLORS[index % RAW_COLORS.length] }}
              >
                <span className={styles.rawOffset}>{`0x${(index * 16).toString(16).padStart(4, '0')}`}</span>
                {line}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className={fieldStyles.sectionTitle}>Event Log</div>
      <div className={fieldStyles.underline} />
      {posts.length === 0 ? (
        <div className={fieldStyles.warning}>No log entries yet.</div>
      ) : (
        <ul className={listStyles.list}>
          {posts.map((post, index) => (
            <li
              key={post.slug}
              className={`${listStyles.item} ${index === selected ? listStyles.itemSelected : ''}`}
              onMouseEnter={() => setSelected(index)}
              onClick={() => setOpenIndex(index)}
            >
              <span className={listStyles.itemLabel}>&#9654; {post.title}</span>
              <span className={listStyles.itemMeta}>{post.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
