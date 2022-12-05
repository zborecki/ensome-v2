import 'styled-components';
import {
  BackgroundThemeType,
  BaseThemeType, ColorThemeType, CommonThemeType, RWDTypographyType
} from './src/types/common';

declare module 'styled-components' {
  export interface DefaultTheme {
    common: CommonThemeType,
    hamburger: BackgroundThemeType,
    header: BaseThemeType & {
      font: RWDTypographyType
      border: {
        [border in 'bottom' | 'inactive']: string;
      };
    },
    logo: ColorThemeType
  }
}
