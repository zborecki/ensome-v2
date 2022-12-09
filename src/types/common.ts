export type BackgroundThemeType = {
  background: string;
};

export type BaseThemeType = BackgroundThemeType & ColorThemeType;

type BaseTypographyType = {
  fontSize: string;
  fontWeight: number;
};

export type ButtonThemeType = {
  shadow : string,
  background: {
    [background in 'secondary' | 'primary']: ButtonStateType;
  },
  color: {
    [color in 'secondary' | 'primary']: ButtonStateType;
  },
  padding: {
    [padding in 'standard' | 'small']: string;
  },
  font: {
    fontFamily: string;
  } & {
    [font in 'standard']: TypographyType;
  }
};

export type ColorThemeType = {
  color: string;
};

export type ColorsType = {
  [color in
  'aliceBlue'
  | 'prussianBlue'
  | 'white'
  | 'indigo'
  | 'steelTeal'
  | 'gunmetal'
  | 'blue'
  | 'spanishGray'
  | 'blueberry'
  ]: string;
};

export type CommonThemeType = BackgroundThemeType & FontSettingsType & {
  borderRadius: string;
};

export type FeatureType = {
  [props in 'headline' | 'description' | 'button' | 'image' | 'link']: string;
};

type FontSettingsType = {
  headline: {
    border: string;
  } & {
    [attribute in 'fontFamily' | 'color']: string;
  },
  paragraph: {
    [attribute in 'fontFamily' | 'color']: string;
  }
};

export type FontsType = {
  [font in 'manrope' | 'openSans']: string;
};

export type LinkType = {
  [link in 'label' | 'link']: string;
};

export type OverviewType = {
  [type in 'value' | 'label']: string;
};

export type ReviewType = {
  [data in 'avatar' | 'fullName' | 'occupation' | 'quote']: string
};

export type RWDTypographyType = {
  [type in 'desktop' | 'mobile']: TypographyType;
};

type ButtonStateType = {
  [state in 'enabled' | 'hovered']: string;
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
