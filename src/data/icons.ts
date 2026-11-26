export const iconNames = [
  'article',
  'arrow_back',
  'cake',
  'campaign',
  'code',
  'computer',
  'deployed_code',
  'favorite',
  'forum',
  'home',
  'key',
  'language',
  'location_on',
  'map',
  'memory',
  'open_in_new',
  'schedule',
  'send',
] as const;

export type IconName = (typeof iconNames)[number];
