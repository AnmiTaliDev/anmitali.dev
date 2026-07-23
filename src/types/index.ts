export interface UserInfo {
  name: string;
  from: string;
  os: string[];
  birthday: string;
  timezone: string;
  social: SocialLink[];
  pgp: PGPInfo;
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
}

export interface PGPInfo {
  fingerprint: string;
  keybase: string;
  keyImportCommands: string[];
}

export interface BootEntry {
  id: string;
  label: string;
  device: string;
  help: string;
  kind: 'local' | 'external';
  href?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
}
