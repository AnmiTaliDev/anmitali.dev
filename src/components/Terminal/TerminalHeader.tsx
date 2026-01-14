import React from 'react';
import styles from './TerminalHeader.module.css';
import ThemeToggle from '../ThemeToggle';

export default function TerminalHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.dots}>
        <div className={`${styles.dot} ${styles.dotRed}`} />
        <div className={`${styles.dot} ${styles.dotYellow}`} />
        <div className={`${styles.dot} ${styles.dotGreen}`} />
      </div>
      <div className={styles.title}>ildar@archlinux: ~</div>
      <ThemeToggle />
    </div>
  );
}
