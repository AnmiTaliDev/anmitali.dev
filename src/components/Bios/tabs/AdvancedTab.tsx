'use client';

import { useEffect, useState } from 'react';
import fieldStyles from './Field.module.css';
import listStyles from './List.module.css';
import { userInfo } from '@/lib/constants';

interface AdvancedTabProps {
  onHelpChange: (text: string) => void;
}

export default function AdvancedTab({ onHelpChange }: AdvancedTabProps) {
  const [selected, setSelected] = useState(0);
  const links = userInfo.social;

  useEffect(() => {
    onHelpChange(`Open the ${links[selected].platform} profile in a new tab.`);
  }, [selected, links, onHelpChange]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelected((prev) => (prev + 1) % links.length);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelected((prev) => (prev - 1 + links.length) % links.length);
      }
      if (event.key === 'Enter') {
        window.open(links[selected].url, '_blank', 'noopener,noreferrer');
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, links]);

  return (
    <div>
      <div className={fieldStyles.sectionTitle}>Advanced Settings</div>
      <div className={fieldStyles.underline} />
      <ul className={listStyles.list}>
        {links.map((link, index) => (
          <li
            key={link.platform}
            className={`${listStyles.item} ${index === selected ? listStyles.itemSelected : ''}`}
            onMouseEnter={() => setSelected(index)}
            onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
          >
            <span className={listStyles.itemLabel}>&#9654; {link.platform}</span>
            <span className={listStyles.itemMeta}>{link.handle}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
