export interface UserInfo {
  name: string;
  nicknames: string[];
  from: string;
  os: string[];
  roles: string[];
  favoriteColor: string;
  music: string[];
  birthday: string;
  age: number;
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
  importScript: string[];
}
