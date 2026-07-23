'use client';

import { useEffect, useState } from 'react';
import styles from './BiosApp.module.css';
import MainTab from './tabs/MainTab';
import AdvancedTab from './tabs/AdvancedTab';
import SecurityTab from './tabs/SecurityTab';
import BootTab from './tabs/BootTab';
import EventLogTab from './tabs/EventLogTab';
import ExitTab from './tabs/ExitTab';
import { BlogPost } from '@/types';

type TabId = 'main' | 'advanced' | 'security' | 'boot' | 'log' | 'exit';

interface TabDef {
  id: TabId;
  label: string;
  enterHint: string;
}

const TABS: TabDef[] = [
  { id: 'main', label: 'Main', enterHint: 'Select Item' },
  { id: 'advanced', label: 'Advanced', enterHint: 'Go to Sub Screen' },
  { id: 'security', label: 'Security', enterHint: 'Select Item' },
  { id: 'boot', label: 'Boot', enterHint: 'Boot Selected Device' },
  { id: 'log', label: 'Event Log', enterHint: 'Go to Sub Screen' },
  { id: 'exit', label: 'Exit', enterHint: 'Select Option' },
];

const GENERAL_HELP =
  'Use Left/Right to switch screens, Up/Down to move between items, Enter to activate the highlighted item, F10 to jump to Exit, and Esc to return to Main.';

interface BiosAppProps {
  posts: BlogPost[];
}

export default function BiosApp({ posts }: BiosAppProps) {
  const [activeTab, setActiveTab] = useState<TabId>('main');
  const [suspendTabSwitch, setSuspendTabSwitch] = useState(false);
  const [helpText, setHelpText] = useState('');
  const [showGeneralHelp, setShowGeneralHelp] = useState(false);

  useEffect(() => {
    setShowGeneralHelp(false);
  }, [activeTab]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'F1') {
        event.preventDefault();
        setShowGeneralHelp((prev) => !prev);
        return;
      }

      if (event.key === 'Escape') {
        if (showGeneralHelp) {
          event.preventDefault();
          setShowGeneralHelp(false);
        } else if (!suspendTabSwitch) {
          setActiveTab('main');
        }
        return;
      }

      if (suspendTabSwitch) return;

      const index = TABS.findIndex((tab) => tab.id === activeTab);

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const nextIndex = (index - 1 + TABS.length) % TABS.length;
        setActiveTab(TABS[nextIndex].id);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const nextIndex = (index + 1) % TABS.length;
        setActiveTab(TABS[nextIndex].id);
      }

      if (event.key === 'F10') {
        event.preventDefault();
        setActiveTab('exit');
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeTab, suspendTabSwitch, showGeneralHelp]);

  const current = TABS.find((tab) => tab.id === activeTab)!;

  return (
    <div className={styles.screen}>
      <div className={styles.titleBar}>ANMITALIDEV BIOS SETUP UTILITY</div>

      <div className={styles.tabBar}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${tab.id === activeTab ? styles.tabActive : ''}`}
            onClick={() => !suspendTabSwitch && setActiveTab(tab.id)}
            disabled={suspendTabSwitch}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.mainPane}>
          {activeTab === 'main' && <MainTab onHelpChange={setHelpText} />}
          {activeTab === 'advanced' && <AdvancedTab onHelpChange={setHelpText} />}
          {activeTab === 'security' && <SecurityTab onHelpChange={setHelpText} />}
          {activeTab === 'boot' && (
            <BootTab onHelpChange={setHelpText} onBootingChange={setSuspendTabSwitch} />
          )}
          {activeTab === 'log' && (
            <EventLogTab posts={posts} onHelpChange={setHelpText} onViewingChange={setSuspendTabSwitch} />
          )}
          {activeTab === 'exit' && <ExitTab onHelpChange={setHelpText} />}
        </div>

        <div className={styles.helpPane}>
          <div className={styles.helpText}>{showGeneralHelp ? GENERAL_HELP : helpText}</div>

          <div className={styles.hintList}>
            <div className={styles.hintRow}>
              <span className={styles.hintKey}>&#8596;</span>
              <span>Select Screen</span>
            </div>
            <div className={styles.hintRow}>
              <span className={styles.hintKey}>&#8597;</span>
              <span>Select Item</span>
            </div>
            <div className={styles.hintRow}>
              <span className={styles.hintKey}>Enter</span>
              <span>{current.enterHint}</span>
            </div>
            <div className={styles.hintRow}>
              <span className={styles.hintKey}>F1</span>
              <span>General Help</span>
            </div>
            <div className={styles.hintRow}>
              <span className={styles.hintKey}>F10</span>
              <span>Save and Exit</span>
            </div>
            <div className={styles.hintRow}>
              <span className={styles.hintKey}>ESC</span>
              <span>Exit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
