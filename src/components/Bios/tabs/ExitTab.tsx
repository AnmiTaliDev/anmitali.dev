'use client';

import { useEffect, useState } from 'react';
import fieldStyles from './Field.module.css';
import listStyles from './List.module.css';

const OPTIONS = [
  {
    id: 'save',
    label: 'Save Changes and Exit',
    message: 'Configuration saved. This is not a real BIOS, so nothing actually changed.',
    help: 'Pretend to persist configuration. This is a static site.',
  },
  {
    id: 'discard',
    label: 'Discard Changes and Exit',
    message: 'Changes discarded. There were none to begin with.',
    help: 'Exit without applying any changes.',
  },
];

interface ExitTabProps {
  onHelpChange: (text: string) => void;
}

export default function ExitTab({ onHelpChange }: ExitTabProps) {
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    onHelpChange(OPTIONS[selected].help);
  }, [selected, onHelpChange]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelected((prev) => (prev + 1) % OPTIONS.length);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelected((prev) => (prev - 1 + OPTIONS.length) % OPTIONS.length);
      }
      if (event.key === 'Enter') {
        setMessage(OPTIONS[selected].message);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <div>
      <div className={fieldStyles.sectionTitle}>Exit Options</div>
      <div className={fieldStyles.underline} />
      <ul className={listStyles.list}>
        {OPTIONS.map((option, index) => (
          <li
            key={option.id}
            className={`${listStyles.item} ${index === selected ? listStyles.itemSelected : ''}`}
            onMouseEnter={() => setSelected(index)}
            onClick={() => setMessage(option.message)}
          >
            <span className={listStyles.itemLabel}>&#9654; {option.label}</span>
          </li>
        ))}
      </ul>

      {message && (
        <div style={{ marginTop: '1rem', color: 'var(--bios-fg-bright)' }}>{message}</div>
      )}
    </div>
  );
}
