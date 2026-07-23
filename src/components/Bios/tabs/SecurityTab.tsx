'use client';

import { useEffect, useState } from 'react';
import fieldStyles from './Field.module.css';
import listStyles from './List.module.css';
import styles from './SecurityTab.module.css';
import { userInfo } from '@/lib/constants';

const FIELDS = [
  {
    label: 'Fingerprint',
    value: userInfo.pgp.fingerprint,
    help: 'PGP key fingerprint. Verify it before trusting any signed message.',
  },
  {
    label: 'Keybase',
    value: userInfo.pgp.keybase,
    help: 'Public Keybase profile mirroring this PGP identity.',
  },
];

function lineClass(line: string): string {
  return line.startsWith('#') ? styles.comment : styles.plain;
}

interface SecurityTabProps {
  onHelpChange: (text: string) => void;
}

export default function SecurityTab({ onHelpChange }: SecurityTabProps) {
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
      if (event.key === 'Enter' && FIELDS[selected].label === 'Keybase') {
        window.open(userInfo.pgp.keybase, '_blank', 'noopener,noreferrer');
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <div>
      <div className={fieldStyles.section}>
        <div className={fieldStyles.sectionTitle}>PGP Identity</div>
        <div className={fieldStyles.underline} />
        <ul className={listStyles.list}>
          {FIELDS.map((field, index) => (
            <li
              key={field.label}
              className={`${listStyles.item} ${index === selected ? listStyles.itemSelected : ''}`}
              onMouseEnter={() => setSelected(index)}
              onClick={() => field.label === 'Keybase' && window.open(field.value, '_blank', 'noopener,noreferrer')}
            >
              <span className={listStyles.itemLabel}>{field.label}</span>
              <span className={listStyles.itemMeta}>{field.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={fieldStyles.section}>
        <div className={fieldStyles.sectionTitle}>Key Import Commands</div>
        <div className={styles.codeBlock}>
          {userInfo.pgp.keyImportCommands.map((line, index) => (
            <div key={index} className={`${styles.codeLine} ${lineClass(line)}`}>
              {line || ' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
