import { DefaultTheme } from 'styled-components';
import { ColorsType, FontsType } from '../types/common';
import typography, { overviewFont } from './typography';

const { headline, paragraph } = typography;

const colors: ColorsType = {
  aliceBlue: '#F1F6FA',
  blue: '#185CFF',
  blueberry: '#467DFF',
  gunmetal: '#292D33',
  indigo: '#194060',
  prussianBlue: '#002B4E',
  spanishGray: '#9497A1',
  steelTeal: '#607D94',
  white: '#FFFFFF'
};

const fonts: FontsType = {
  manrope: 'Manrope',
  openSans: 'Open Sans'
};

export default {
  button: {
    shadow: 'rgba(24, 92, 255, 0.18)',
    background: {
      secondary: {
        enabled: colors.white,
        hovered: colors.aliceBlue
      },
      primary: {
        enabled: colors.blue,
        hovered: colors.blueberry
      }
    },
    color: {
      secondary: {
        enabled: colors.prussianBlue,
        hovered: colors.indigo
      },
      primary: {
        enabled: colors.white,
        hovered: colors.white
      }
    },
    font: {
      fontFamily: fonts.manrope,
      standard: headline.h6
    },
    padding: {
      standard: '16px 52px',
      small: '10px 26px'
    }
  },
  common: {
    background: colors.aliceBlue,
    borderRadius: '6px',
    paragraph: {
      fontFamily: fonts.openSans,
      color: colors.spanishGray
    },
    headline: {
      fontFamily: fonts.manrope,
      color: colors.gunmetal,
      border: colors.blue
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
    h1: headline.h1,
    h2: headline.h2,
    'h7-semibold': headline['h7-semibold']
  },
  hero: {
    background: colors.prussianBlue,
    color: colors.white
  },
  logo: {
    color: colors.white
  },
  paragraph: {
    p1: paragraph.p1,
    'p2-regular': paragraph['p2-regular']
  },
  overview: {
    background: colors.white,
    value: {
      color: colors.blue,
      fontSize: overviewFont.fontSize,
      fontWeight: overviewFont.fontWeight,
      lineHeight: overviewFont.lineHeight,
      letterSpacing: overviewFont.letterSpacing
    }
  }
} as DefaultTheme;
