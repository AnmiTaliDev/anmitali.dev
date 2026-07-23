import { UserInfo, BootEntry } from '@/types';

export const userInfo: UserInfo = {
  name: 'Hm',
  from: 'Kazakhstan',
  os: ['ArchLinux', 'OpenBSD', 'Gentoo'],
  birthday: '24.12.2??? • hm y.o.',
  timezone: 'UTC+5 (Asia/Astana)',
  social: [
    {
      platform: 'Telegram',
      handle: '@anmitali / @Aswot1',
      url: 'https://t.me/anmitali',
    },
    {
      platform: 'GitHub',
      handle: '@AnmiTaliDev',
      url: 'https://github.com/AnmiTaliDev',
    },
    {
      platform: 'Reddit',
      handle: 'u/AnmiTaliDev',
      url: 'https://reddit.com/u/AnmiTaliDev',
    },
    {
      platform: 'Telegram Channel',
      handle: '@anmitalilog',
      url: 'https://t.me/anmitalilog',
    },
    {
      platform: 'GNU/Linux Distribution Project',
      handle: '@NurOS_tg',
      url: 'https://t.me/NurOS_tg',
    },
    {
      platform: 'RTOS Project',
      handle: '@bedrockRTOS',
      url: 'https://t.me/bedrockRTOS',
    },
    {
      platform: 'OpenStreetMap',
      handle: 'AnmiTaliDev',
      url: 'https://openstreetmap.org/user/AnmiTaliDev',
    },
  ],
  pgp: {
    fingerprint: 'F57B BC55 AC9D 822B 385F A2C9 0E0E 31E2 07AD F598',
    keybase: 'https://keybase.io/AnmiTaliDev',
    keyImportCommands: [
      '# Ubuntu Key Server',
      'gpg --keyserver keyserver.ubuntu.com --recv-keys 0E0E31E207ADF598',
      '',
      '# Or OpenPGP',
      'gpg --keyserver keys.openpgp.org --recv-keys 0E0E31E207ADF598',
    ],
  },
};

export const bootEntries: BootEntry[] = [
  {
    id: 'archlinux',
    label: 'ArchLinux',
    device: 'HDD0: Primary Master',
    help: 'Boot the primary ArchLinux installation.',
    kind: 'local',
  },
  {
    id: 'openbsd',
    label: 'OpenBSD',
    device: 'HDD1: Primary Slave',
    help: 'Boot into OpenBSD.',
    kind: 'local',
  },
  {
    id: 'gentoo',
    label: 'Gentoo',
    device: 'HDD2: Secondary Master',
    help: 'Boot into Gentoo.',
    kind: 'local',
  },
  {
    id: 'nuros',
    label: 'NurOS',
    device: 'USB0: Removable Media',
    help: 'Boot the NurOS live image.',
    kind: 'external',
    href: 'https://nuros.org',
  },
  {
    id: 'support',
    label: 'Psychological Support',
    device: 'NET0: PXE Boot',
    help: 'Immediate access to psychological support resources.',
    kind: 'external',
    href: 'https://nosuicidepls.org',
  },
];

export const asciiArt = `   _   _ _   _ _____  __
  | | | | \\ | |_ _\\ \\/ /
  | | | |  \\| || | \\  /
  | |_| | |\\  || | /  \\
   \\___/|_| \\_|___/_/\\_\\`;
