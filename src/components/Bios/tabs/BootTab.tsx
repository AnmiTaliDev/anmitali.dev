'use client';

import { useEffect, useRef, useState } from 'react';
import fieldStyles from './Field.module.css';
import listStyles from './List.module.css';
import styles from './BootTab.module.css';
import { bootEntries } from '@/lib/constants';
import { BootEntry } from '@/types';

interface BootTabProps {
  onBootingChange: (booting: boolean) => void;
  onHelpChange: (text: string) => void;
}

function buildBootLines(entry: BootEntry): string[] {
  const lines = [
    `Initializing boot device: ${entry.device}`,
    'Loading kernel image... [ OK ]',
    'Mounting root filesystem... [ OK ]',
    'Starting init process... [ OK ]',
  ];

  if (entry.kind === 'external') {
    lines.push(`Handing off to ${entry.label}...`);
  } else {
    lines.push(`Boot target reached: ${entry.label} (this is a static site, nothing else happens)`);
  }

  return lines;
}

export default function BootTab({ onBootingChange, onHelpChange }: BootTabProps) {
  const [selected, setSelected] = useState(0);
  const [visibleLines, setVisibleLines] = useState<string[] | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (visibleLines === null) onHelpChange(bootEntries[selected].help);
  }, [selected, visibleLines, onHelpChange]);

  const boot = (entry: BootEntry) => {
    onBootingChange(true);
    onHelpChange('System is booting. Please wait.');
    const lines = buildBootLines(entry);
    setVisibleLines([]);

    lines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...(prev ?? []), line]);
        if (index === lines.length - 1) {
          if (entry.kind === 'external' && entry.href) {
            const redirectTimeout = setTimeout(() => {
              window.location.href = entry.href as string;
            }, 700);
            timeoutRef.current = redirectTimeout;
          } else {
            const resetTimeout = setTimeout(() => {
              setVisibleLines(null);
              onBootingChange(false);
            }, 1200);
            timeoutRef.current = resetTimeout;
          }
        }
      }, index * 350);
      timeoutRef.current = timeout;
    });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (visibleLines !== null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelected((prev) => (prev + 1) % bootEntries.length);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelected((prev) => (prev - 1 + bootEntries.length) % bootEntries.length);
      }
      if (event.key === 'Enter') {
        boot(bootEntries[selected]);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, visibleLines]);

  if (visibleLines !== null) {
    return (
      <div className={styles.overlay}>
        {visibleLines.map((line, index) => (
          <div key={index} className={styles.line}>
            {line}
          </div>
        ))}
        <span className={styles.cursor}>_</span>
      </div>
    );
  }

  return (
    <div>
      <div className={fieldStyles.sectionTitle}>Boot Device Priority</div>
      <div className={fieldStyles.underline} />
      <ul className={listStyles.list}>
        {bootEntries.map((entry, index) => (
          <li
            key={entry.id}
            className={`${listStyles.item} ${index === selected ? listStyles.itemSelected : ''}`}
            onMouseEnter={() => setSelected(index)}
            onClick={() => boot(entry)}
          >
            <span className={listStyles.itemLabel}>&#9654; {entry.label}</span>
            <span className={listStyles.itemMeta}>{entry.device}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
