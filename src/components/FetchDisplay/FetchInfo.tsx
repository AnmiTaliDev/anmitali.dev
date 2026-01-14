import React from 'react';
import styles from './FetchInfo.module.css';
import ASCIIArt from './ASCIIArt';
import InfoLine from './InfoLine';
import SocialLinks from '../SocialLinks';
import { userInfo } from '@/lib/constants';

export default function FetchInfo() {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '14px', marginBottom: '0.5rem' }}>
          <span style={{ color: 'var(--terminal-accent)', fontWeight: 600 }}>ildar</span>
          <span style={{ color: 'var(--terminal-fg)' }}>@</span>
          <span style={{ color: 'var(--terminal-accent)', fontWeight: 600 }}>archlinux</span>
        </div>
        <div style={{ borderTop: '1px solid var(--terminal-accent)', opacity: 0.3 }}></div>
      </div>
      <div className={styles.container}>
        <ASCIIArt />
        <div>
          <InfoLine label="Name" value={userInfo.name} />
        <InfoLine label="Nicknames" value={userInfo.nicknames} />
        <InfoLine label="From" value={userInfo.from} />
        <InfoLine label="OS" value={userInfo.os} />
        <InfoLine label="Roles" value={userInfo.roles} />
        <InfoLine label="Favorite Color" value={userInfo.favoriteColor} />
        <InfoLine label="Music" value={userInfo.music} />
        <InfoLine label="Birthday" value={`${userInfo.birthday} • ${userInfo.age} y.o.`} />
        <InfoLine label="Timezone" value={userInfo.timezone} />

        <div className={styles.separator} />

        <SocialLinks links={userInfo.social} />

        <div className={styles.separator} />

        <InfoLine label="PGP Fingerprint" value={userInfo.pgp.fingerprint} />
        <InfoLine
          label="Keybase"
          value={
            <a href={userInfo.pgp.keybase} target="_blank" rel="noopener noreferrer">
              {userInfo.pgp.keybase}
            </a>
          }
        />
      </div>
    </div>

      <div style={{ marginTop: '2rem', fontSize: '12px' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ color: 'var(--terminal-accent)', fontWeight: 600 }}>ildar</span>
          <span style={{ color: 'var(--terminal-fg)' }}>@</span>
          <span style={{ color: 'var(--terminal-accent)', fontWeight: 600 }}>archlinux</span>
          <span style={{ color: 'var(--terminal-fg)' }}> ~ </span>
          <span style={{ color: 'var(--terminal-bright)' }}>$</span>
          <span style={{ color: 'var(--terminal-fg)', marginLeft: '0.5rem' }}>cat import-anmitali-pgpkeys.sh</span>
        </div>
        <div style={{
          backgroundColor: 'rgba(45, 90, 143, 0.1)',
          border: '1px solid var(--terminal-accent)',
          padding: '1rem',
          borderRadius: '4px',
          marginTop: '0.5rem'
        }}>
          {userInfo.pgp.importScript.map((line, index) => (
            <div
              key={index}
              style={{
                marginBottom: '0.15rem',
                fontFamily: 'inherit',
                color: line.startsWith('#')
                  ? 'var(--terminal-accent)'
                  : line.startsWith('echo') || line.includes('if [') || line === 'fi'
                  ? 'var(--terminal-bright)'
                  : 'var(--terminal-fg)'
              }}
            >
              {line || '\u00A0'}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
