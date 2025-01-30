export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export type ThemeType = ThemeTypes.LIGHT | ThemeTypes.DARK | ThemeTypes.SYSTEM;

export interface IColorsValues {
  light: string;
  dark: string;
}

export interface IColors {
  overlay: string;
  backgroundPrimary: string;
  accentDefault: string;
  textPrimary: string;
  textSecondary: string;
}

export enum ColorsKeys {
  overlay = 'overlay',
  backgroundPrimary = 'backgroundPrimary',
  textPrimary = 'textPrimary',
  textSecondary = 'textSecondary',
}

export interface IThemeContext {
  theme: ThemeType;
  selectTheme: ThemeTypes;
  changeTheme: (value: ThemeTypes) => void;
}
