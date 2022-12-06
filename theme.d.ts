import 'styled-components';
import {
  BackgroundThemeType,
  BaseThemeType, ColorThemeType, CommonThemeType, RWDTypographyType, TypographySettingsType
} from './src/types/common';

declare module 'styled-components' {
  export interface DefaultTheme extends TypographySettingsType {
    common: CommonThemeType,
    hamburger: BackgroundThemeType,
    header: BaseThemeType & {
      font: RWDTypographyType
      border: {
        [border in 'bottom' | 'inactive']: string;
      };
    },
    hero: BaseThemeType
    logo: ColorThemeType
  }
}
