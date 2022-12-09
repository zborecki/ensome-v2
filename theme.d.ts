import 'styled-components';
import {
  BackgroundThemeType,
  BaseThemeType,
  ButtonThemeType,
  ColorThemeType,
  CommonThemeType,
  RWDTypographyType,
  TypographySettingsType,
  TypographyType
} from './src/types/common';

declare module 'styled-components' {
  export interface DefaultTheme extends TypographySettingsType {
    common: CommonThemeType,
    button: ButtonThemeType
    hamburger: BackgroundThemeType,
    header: BaseThemeType & {
      font: RWDTypographyType
      border: {
        [border in 'bottom' | 'inactive']: string;
      };
    },
    hero: BaseThemeType
    logo: ColorThemeType
    overview: BackgroundThemeType & {
      value: TypographyType & ColorThemeType
    },
    review: BackgroundThemeType,
    blog: BackgroundThemeType,
    footer: BaseThemeType & {
      border: string;
    },
    error: {
      [type in 'code' | 'information']: string;
    }
  }
}
