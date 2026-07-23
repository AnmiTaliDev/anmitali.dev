'use client';

import { useEffect, useState } from 'react';
import fieldStyles from './Field.module.css';
import listStyles from './List.module.css';
import { userInfo } from '@/lib/constants';

const FIELDS = [
  { label: 'Name', value: userInfo.name, help: 'Personal identification name used across profiles.' },
  { label: 'From', value: userInfo.from, help: 'Country of residence.' },
  { label: 'Installed OS', value: userInfo.os.join(', '), help: 'Operating systems in daily use.' },
  { label: 'Birthday', value: userInfo.birthday, help: 'Exact birth date is intentionally obscured.' },
  { label: 'System Time Zone', value: userInfo.timezone, help: 'Local UTC offset.' },
];

interface MainTabProps {
  onHelpChange: (text: string) => void;
}

export default function MainTab({ onHelpChange }: MainTabProps) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    onHelpChange(FIELDS[selected].help);
  }, [selected, onHelpChange]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelected((prev) => (prev + 1) % FIELDS.length);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelected((prev) => (prev - 1 + FIELDS.length) % FIELDS.length);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div>
      <div className={fieldStyles.sectionTitle}>System Identification</div>
      <div className={fieldStyles.underline} />
      <ul className={listStyles.list}>
        {FIELDS.map((field, index) => (
          <li
            key={field.label}
            className={`${listStyles.item} ${index === selected ? listStyles.itemSelected : ''}`}
            onMouseEnter={() => setSelected(index)}
          >
            <span className={listStyles.itemLabel}>{field.label}</span>
            <span className={listStyles.itemMeta}>{field.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
