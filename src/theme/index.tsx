import { DefaultTheme } from 'styled-components';
import { ColorsType, FontsType } from '../types/common';
import typography from './typography';

const { headline } = typography;

const colors: ColorsType = {
  aliceBlue: '#F1F6FA',
  indigo: '#194060',
  prussianBlue: '#002B4E',
  white: '#FFFFFF'
};

const fonts: FontsType = {
  manrope: 'Manrope',
  openSans: 'Open Sans'
};

export default {
  common: {
    background: colors.aliceBlue,
    paragraph: fonts.openSans
  },
  header: {
    background: colors.prussianBlue,
    border: colors.indigo,
    color: colors.white,
    font: headline['h7-medium']
  },
  logo: {
    color: colors.white
  }
} as DefaultTheme;
