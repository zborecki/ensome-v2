import { css } from 'styled-components';
import { TypographySettingsType, TypographyType } from '../types/common';
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
    || (variant === 'h2' && headline.h2.fontSize)
    || (variant === 'h4' && headline.h4.fontSize)
    || (variant === 'h6' && headline.h6.fontSize)
    || (variant === 'h7-semibold' && headline['h7-semibold'].fontSize)
  )};
  font-weight: ${({ variant, theme: { headline } }) => (
    (variant === 'h1' && headline.h1.fontWeight)
    || (variant === 'h2' && headline.h2.fontWeight)
    || (variant === 'h4' && headline.h4.fontWeight)
    || (variant === 'h6' && headline.h6.fontWeight)
    || (variant === 'h7-semibold' && headline['h7-semibold'].fontWeight)
  )};
  line-height: ${({ variant, theme: { headline } }) => (
    (variant === 'h1' && headline.h1.lineHeight)
    || (variant === 'h2' && headline.h2.lineHeight)
    || (variant === 'h6' && headline.h6.lineHeight)
    || (variant === 'h4' && headline.h4.lineHeight)
    || (variant === 'h7-semibold' && headline['h7-semibold'].lineHeight)
  )};
  letter-spacing: ${({ variant, theme: { headline } }) => (
    (variant === 'h1' && headline.h1.letterSpacing)
    || (variant === 'h2' && headline.h2.letterSpacing)
    || (variant === 'h6' && headline.h6.letterSpacing)
    || (variant === 'h4' && headline.h4.letterSpacing)
    || (variant === 'h7-semibold' && headline['h7-semibold'].letterSpacing)
  )};
`;

export const UnderlinedHeadline = css<HeadlineProps>`
  position: relative;

  ${({ underlined, theme: { common: { headline } } }) => (underlined ? `
    &::before {
      content: '';
      position: absolute;
      left: 0px;
      bottom: -14px;
      display: block;
      background: ${headline.border};
      height: 4px;
      width: 94px;
    }
  ` : undefined)};
`;

export const ParagraphSettings = css<ParagraphProps>`
  color: ${({ color, theme: { common: { paragraph } } }) => (color || paragraph.color)};
  font-size: ${({ variant, theme: { paragraph } }) => (
    (variant === 'p2-regular' && paragraph['p2-regular'].fontSize)
    || (variant === 'p1' && paragraph.p1.fontSize)
    || (variant === 'p3-regular' && paragraph['p3-regular'].fontSize)
  )};
  font-weight: ${({ variant, theme: { paragraph } }) => (
    (variant === 'p2-regular' && paragraph['p2-regular'].fontWeight)
    || (variant === 'p1' && paragraph.p1.fontWeight)
    || (variant === 'p3-regular' && paragraph['p3-regular'].fontWeight)
  )};
  line-height: ${({ variant, theme: { paragraph } }) => (
    (variant === 'p2-regular' && paragraph['p2-regular'].lineHeight)
    || (variant === 'p1' && paragraph.p1.lineHeight)
    || (variant === 'p3-regular' && paragraph['p3-regular'].lineHeight)
  )};
  letter-spacing: ${({ variant, theme: { paragraph } }) => (
    (variant === 'p2-regular' && paragraph['p2-regular'].letterSpacing)
    || (variant === 'p1' && paragraph.p1.letterSpacing)
    || (variant === 'p3-regular' && paragraph['p3-regular'].letterSpacing)
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

export const overviewFont: TypographyType = {
  fontSize: '75px',
  fontWeight: FontWeight.Regular,
  lineHeight: '100%',
  letterSpacing: '-0.025em'
};

export default typography;
