import styled from 'styled-components';
import { HeadlineSettings, UnderlinedHeadline, ParagraphSettings } from '../theme/typography';
import { HeadlineProps, ParagraphProps } from '../types/props';

export const Headline = styled.h1<HeadlineProps>`
  margin: 0;
  ${HeadlineSettings}
  ${UnderlinedHeadline}
`;

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  ${ParagraphSettings}
`;

export const Wrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    padding: 0px 16px;
  }
`;
