import React from 'react';
import styles from './ASCIIArt.module.css';
import { asciiArt } from '@/lib/constants';

export default function ASCIIArt() {
  return <pre className={styles.ascii}>{asciiArt}</pre>;
}
