import React from 'react';
import styles from './InfoLine.module.css';

interface InfoLineProps {
  label: string;
  value: string | string[] | React.ReactNode;
}

export default function InfoLine({ label, value }: InfoLineProps) {
  const displayValue = Array.isArray(value) ? value.join(', ') : value;

  return (
    <div className={styles.line}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{displayValue}</span>
    </div>
  );
}
