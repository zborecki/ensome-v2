import { DefaultTheme } from 'styled-components';
import { ColorsType, FontsType } from '../types/common';
import typography from './typography';

const { headline, paragraph } = typography;

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
    paragraph: {
      fontFamily: fonts.openSans,
      color: 'red'
    },
    headline: {
      fontFamily: fonts.manrope,
      color: 'yellow'
    }
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
  headline: {
    h1: headline.h1
  },
  hero: {
    background: colors.prussianBlue,
    color: colors.white
  },
  logo: {
    color: colors.white
  },
  paragraph: {
    'p2-regular': paragraph['p2-regular']
  }
} as DefaultTheme;
