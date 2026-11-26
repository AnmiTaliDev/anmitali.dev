import type { IconName } from './icons';

export interface Link {
  icon: IconName;
  title: string;
  detail: string;
  url: string;
}

export const links: Link[] = [
  { icon: 'send', title: 'Telegram', detail: '@anmitali / @Aswot1', url: 'https://t.me/anmitali' },
  { icon: 'code', title: 'GitHub', detail: '@AnmiTaliDev', url: 'https://github.com/AnmiTaliDev' },
  { icon: 'forum', title: 'Reddit', detail: 'u/AnmiTaliDev', url: 'https://reddit.com/u/AnmiTaliDev' },
  { icon: 'cloud', title: 'Bluesky', detail: 'anmitali.dev', url: 'https://bsky.app/profile/anmitali.dev' },
  { icon: 'campaign', title: 'Telegram channel', detail: '@thepagelog', url: 'https://t.me/thepagelog' },
  { icon: 'map', title: 'OpenStreetMap', detail: 'AnmiTaliDev', url: 'https://openstreetmap.com/user/AnmiTaliDev' },
];

export const projectLinks: Link[] = [
  { icon: 'language', title: 'NurOS', detail: 'nuros.org', url: 'https://nuros.org' },
  { icon: 'deployed_code', title: 'NurOS on Telegram', detail: '@NurOS_tg', url: 'https://t.me/NurOS_tg' },
  { icon: 'memory', title: 'bedrockRTOS on Telegram', detail: '@bedrockRTOS', url: 'https://t.me/bedrockRTOS' },
];

export const supportLinks: Link[] = [
  { icon: 'favorite', title: 'Psychological support', detail: 'nosuicidepls.org', url: 'https://nosuicidepls.org' },
];
