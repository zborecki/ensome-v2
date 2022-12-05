import { DefaultTheme } from 'styled-components';
import { ColorsType, FontsType } from '../types/common';
import typography from './typography';

const { headline } = typography;

const colors: ColorsType = {
  aliceBlue: '#F1F6FA',
  indigo: '#194060',
  prussianBlue: '#002B4E',
  steelTeal: '#607D94',
  white: '#FFFFFF'
};

const fonts: FontsType = {
  manrope: 'Manrope',
  openSans: 'Open Sans'
};

export default {
  common: {
    background: colors.aliceBlue,
    borderRadius: '6px',
    paragraph: fonts.openSans
  },
  hamburger: {
    background: colors.white
  },
  header: {
    background: colors.prussianBlue,
    border: {
      bottom: colors.indigo,
      inactive: colors.steelTeal
    },
    color: colors.white,
    font: {
      desktop: headline['h7-medium'],
      mobile: headline.h6
    }
  },
  logo: {
    color: colors.white
  }
} as DefaultTheme;
