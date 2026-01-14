import React from 'react';
import styles from './Terminal.module.css';

interface TerminalProps {
  children: React.ReactNode;
}

export default function Terminal({ children }: TerminalProps) {
  return (
    <div className={`${styles.terminal} fade-in`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
