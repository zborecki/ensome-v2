import 'styled-components';
import {
  BaseThemeType, ColorThemeType, CommonThemeType, TypographyType
} from './src/types/common';

declare module 'styled-components' {
  export interface DefaultTheme {
    common: CommonThemeType,
    header: BaseThemeType & {
      font: TypographyType
      border: string;
    },
    logo: ColorThemeType
  }
}
