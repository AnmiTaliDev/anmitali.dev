import {
  argbFromHex,
  hexFromArgb,
  Hct,
  MaterialDynamicColors,
  SchemeTonalSpot,
  type DynamicScheme,
} from '@material/material-color-utilities';

const seeds = {
  baseline: '#6750a4',
  blue: '#4285f4',
  red: '#ea4335',
  yellow: '#fbbc04',
  green: '#34a853',
};

const colorRoles = [
  'primary',
  'onPrimary',
  'primaryContainer',
  'onPrimaryContainer',
  'primaryFixed',
  'primaryFixedDim',
  'onPrimaryFixed',
  'onPrimaryFixedVariant',
  'secondary',
  'onSecondary',
  'secondaryContainer',
  'onSecondaryContainer',
  'secondaryFixed',
  'secondaryFixedDim',
  'onSecondaryFixed',
  'onSecondaryFixedVariant',
  'tertiary',
  'onTertiary',
  'tertiaryContainer',
  'onTertiaryContainer',
  'tertiaryFixed',
  'tertiaryFixedDim',
  'onTertiaryFixed',
  'onTertiaryFixedVariant',
  'error',
  'onError',
  'errorContainer',
  'onErrorContainer',
  'surface',
  'surfaceDim',
  'surfaceBright',
  'surfaceContainerLowest',
  'surfaceContainerLow',
  'surfaceContainer',
  'surfaceContainerHigh',
  'surfaceContainerHighest',
  'onSurface',
  'onSurfaceVariant',
  'outline',
  'outlineVariant',
  'inverseSurface',
  'inverseOnSurface',
  'inversePrimary',
  'scrim',
  'shadow',
] as const;

export const themeNames = Object.keys(seeds);

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function roleColor(role: (typeof colorRoles)[number], scheme: DynamicScheme): string {
  return hexFromArgb(MaterialDynamicColors[role].getArgb(scheme));
}

function buildThemeRule(name: string, seed: string): string {
  const source = Hct.fromInt(argbFromHex(seed));
  const light = new SchemeTonalSpot(source, false, 0);
  const dark = new SchemeTonalSpot(source, true, 0);
  const declarations = colorRoles.map(
    (role) =>
      `--md-sys-color-${toKebabCase(role)}:light-dark(${roleColor(role, light)},${roleColor(role, dark)});`,
  );

  return `:root[data-theme='${name}']{${declarations.join('')}}`;
}

export function buildThemeCss(): string {
  return Object.entries(seeds)
    .map(([name, seed]) => buildThemeRule(name, seed))
    .join('');
}
