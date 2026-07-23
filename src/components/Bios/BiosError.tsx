'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BiosError.module.css';

interface BiosErrorProps {
  code: string;
  title: string;
  message: string;
  beepCode: string;
}

export default function BiosError({ code, title, message, beepCode }: BiosErrorProps) {
  const router = useRouter();

  useEffect(() => {
    function goHome() {
      router.push('/');
    }

    function onKeyDown() {
      goHome();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [router]);

  return (
    <div className={styles.screen} onClick={() => router.push('/')}>
      <div>Idk Inc.</div>
      <div>AnmiTaliDev BIOS v2026.07 Setup Utility</div>
      <div className={styles.gap} />
      <div>CPU: AnmiTaliDev Core</div>
      <div>Detecting boot device... FAIL</div>
      <div className={styles.gap} />
      <div className={styles.errorTitle}>*** FATAL ERROR {code} ***</div>
      <div className={styles.errorTitle}>{title}</div>
      <div className={styles.gap} />
      <div>{message}</div>
      <div className={styles.gap} />
      <div>Beep Code: {beepCode}</div>
      <div className={styles.gap} />
      <div>
        Press any key to return to Setup Utility<span className={styles.cursor}>_</span>
      </div>
    </div>
  );
}
