import React from 'react';
import { SocialLink } from '@/types';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li key={index} className={styles.item}>
          <span className={styles.platform}>{link.platform}</span>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {link.handle}
          </a>
        </li>
      ))}
    </ul>
  );
}
