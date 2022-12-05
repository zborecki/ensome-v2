export type BackgroundThemeType = {
  background: string;
};

export type BaseThemeType = BackgroundThemeType & ColorThemeType;

type BaseTypographyType = {
  fontSize: string;
  fontWeight: number;
};

export type ColorThemeType = {
  color: string;
};

export type ColorsType = {
  [color in 'aliceBlue' | 'prussianBlue' | 'white' | 'indigo']: string;
};

export type CommonThemeType = BackgroundThemeType & {
  paragraph: string;
};

export type FontsType = {
  [font in 'manrope' | 'openSans']: string;
};

export type LinkType = {
  [link in 'label' | 'link']: string;
};

export type TypographySettingsType = {
  headline: {
    [headline in 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7-semibold' | 'h7-medium']: TypographyType;
  },
  paragraph: {
    [paragraph in 'p1' | 'p2-regular' | 'p2-bold' | 'p3-regular' | 'p3-semibold']: TypographyType;
  }
};

export type TypographyType = BaseTypographyType & {
  [typography in 'lineHeight' | 'letterSpacing']?: string;
};
