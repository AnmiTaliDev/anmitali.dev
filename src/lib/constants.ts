import { UserInfo } from '@/types';

export const userInfo: UserInfo = {
  name: 'Ildar',
  nicknames: ['AnmiTaliDev', 'Aswot', 'AnmiTali'],
  from: 'Kazakhstan, Kostanay',
  os: ['ArchLinux', 'OpenBSD', 'Gentoo'],
  roles: ['Developer', 'Learning Psychology', 'Cartographer'],
  favoriteColor: 'Dark shades of blue',
  music: [
    'КИНО',
    'ДДТ',
    'Би-2',
    'Дайте Танк (!)',
    'Dos-Muqasan',
    'Aphex Twin',
    'and etc.',
  ],
  birthday: '24.12.2012',
  age: 13,
  timezone: 'UTC+5 (Kostanay/Asia)',
  social: [
    {
      platform: 'Telegram',
      handle: '@anmitali / @Aswot1',
      url: 'https://t.me/anmitali'
    },
    {
      platform: 'GitHub',
      handle: '@AnmiTaliDev',
      url: 'https://github.com/AnmiTaliDev'
    },
    {
      platform: 'Reddit',
      handle: 'u/Taliildar',
      url: 'https://reddit.com/u/Taliidar/'
    },
    {
      platform: 'Telegram Channel',
      handle: '@anmitalilog',
      url: 'https://t.me/anmitalilog'
    },
    {
      platform: 'GNU/Linux Project',
      handle: '@NurOS_tg',
      url: 'https://t.me/NurOS_tg'
    },
    {
      platform: 'RTOS Project',
      handle: '@bedrockRTOS',
      url: 'https://t.me/bedrockRTOS'
    },
    {
      platform: 'OpenStreetMap',
      handle: 'AnmiTaliDev',
      url: 'https://openstreetmap.org/user/AnmiTaliDev'
    },
  ],
  comment: 'Just not geography...',
  pgp: {
    fingerprint: 'F57B BC55 AC9D 822B 385F A2C9 0E0E 31E2 07AD F598',
    keybase: 'https://keybase.io/AnmiTaliDev',
    importScript: [
      '#!/bin/bash',
      '# import-anmitali-pgpkeys.sh',
      '# Script to import AnmiTali PGP keys',
      '',
      'echo "Importing AnmiTali PGP keys..."',
      '',
      '# Try Ubuntu Key Server',
      'gpg --keyserver keyserver.ubuntu.com --recv-keys 0E0E31E207ADF598',
      '',
      '# If that fails, try OpenPGP',
      'if [ $? -ne 0 ]; then',
      '  echo "Trying OpenPGP keyserver..."',
      '  gpg --keyserver keys.openpgp.org --recv-keys 0E0E31E207ADF598',
      'fi',
      '',
      'echo "Done!"',
    ],
  },
};

export const asciiArt = `   _   _ _   _ _____  __
  | | | | \\ | |_ _\\ \\/ /
  | | | |  \\| || | \\  /
  | |_| | |\\  || | /  \\
   \\___/|_| \\_|___/_/\\_\\`;
