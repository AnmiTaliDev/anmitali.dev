import type { IconName } from './icons';

export interface Fact {
  icon: IconName;
  label: string;
  value: string;
}

export const name = 'Hm';
export const handle = 'AnmiTaliDev';

export const facts: Fact[] = [
  { icon: 'location_on', label: 'From', value: 'Kazakhstan' },
  { icon: 'computer', label: 'Operating systems', value: 'ArchLinux, OpenBSD, Gentoo' },
  { icon: 'cake', label: 'Birthday', value: '24.12.2??? • hm y.o.' },
  { icon: 'schedule', label: 'Time zone', value: 'UTC+5 (Asia/Astana)' },
];
