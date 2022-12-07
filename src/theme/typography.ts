import { css } from 'styled-components';
import { TypographySettingsType } from '../types/common';
import { HeadlineProps, ParagraphProps } from '../types/props';

enum FontWeight {
  Regular = 400,
  Medium = 500,
  Semibold = 600,
  Bold = 700,
  Extrabold = 800
}

export const HeadlineSettings = css<HeadlineProps>`
  color: ${({ color, theme: { common: { headline } } }) => (color || headline.color)};
  font-family: ${({ theme: { common: { headline } } }) => headline.fontFamily}, sans-serif;
  font-size: ${({ variant, theme: { headline } }) => (
    (variant === 'h1' && headline.h1.fontSize)
  )};
  font-weight: ${({ variant, theme: { headline } }) => (
    (variant === 'h1' && headline.h1.fontWeight)
  )};
  line-height: ${({ variant, theme: { headline } }) => (
    (variant === 'h1' && headline.h1.lineHeight)
  )};
  letter-spacing: ${({ variant, theme: { headline } }) => (
    (variant === 'h1' && headline.h1.letterSpacing)
  )};
`;

export const ParagraphSettings = css<ParagraphProps>`
  color: ${({ color, theme: { common: { paragraph } } }) => (color || paragraph.color)};
  font-size: ${({ variant, theme: { paragraph } }) => (
    (variant === 'p2-regular' && paragraph['p2-regular'].fontSize)
  )};
  font-weight: ${({ variant, theme: { paragraph } }) => (
    (variant === 'p2-regular' && paragraph['p2-regular'].fontWeight)
  )};
  line-height: ${({ variant, theme: { paragraph } }) => (
    (variant === 'p2-regular' && paragraph['p2-regular'].lineHeight)
  )};
  letter-spacing: ${({ variant, theme: { paragraph } }) => (
    (variant === 'p2-regular' && paragraph['p2-regular'].letterSpacing)
  )};
`;

const typography: TypographySettingsType = {
  headline: {
    h1: {
      fontSize: '46px',
      fontWeight: FontWeight.Extrabold,
      lineHeight: '60px',
      letterSpacing: '-0.015em'
    },
    h2: {
      fontSize: '38px',
      fontWeight: FontWeight.Extrabold,
      lineHeight: '56px',
      letterSpacing: '-0.015em'
    },
    h3: {
      fontSize: '30px',
      fontWeight: FontWeight.Extrabold,
      lineHeight: '40px',
      letterSpacing: '-0.015em'
    },
    h4: {
      fontSize: '22px',
      fontWeight: FontWeight.Bold,
      lineHeight: '33px',
      letterSpacing: '-0.015em'
    },
    h5: {
      fontSize: '20px',
      fontWeight: FontWeight.Bold,
      lineHeight: '30px',
      letterSpacing: '-0.015em'
    },
    h6: {
      fontSize: '16px',
      fontWeight: FontWeight.Bold,
      lineHeight: '24px',
      letterSpacing: '-0.015em'
    },
    'h7-semibold': {
      fontSize: '14px',
      fontWeight: FontWeight.Semibold,
      lineHeight: '24px',
      letterSpacing: '-0.01em'
    },
    'h7-medium': {
      fontSize: '14px',
      fontWeight: FontWeight.Medium,
      lineHeight: '24px',
      letterSpacing: '-0.01em'
    }
  },
  paragraph: {
    p1: {
      fontSize: '20px',
      fontWeight: FontWeight.Regular,
      lineHeight: '33px',
      letterSpacing: '-0.015em'
    },
    'p2-regular': {
      fontSize: '16px',
      fontWeight: FontWeight.Regular,
      lineHeight: '28px',
      letterSpacing: '-0.015em'
    },
    'p2-bold': {
      fontSize: '16px',
      fontWeight: FontWeight.Bold,
      lineHeight: '28px',
      letterSpacing: '-0.015em'
    },
    'p3-regular': {
      fontSize: '14px',
      fontWeight: FontWeight.Regular,
      lineHeight: '24px',
      letterSpacing: '-0.015em'
    },
    'p3-semibold': {
      fontSize: '14px',
      fontWeight: FontWeight.Semibold,
      lineHeight: '24px',
      letterSpacing: '-0.015em'
    }
  }
};

export default typography;
