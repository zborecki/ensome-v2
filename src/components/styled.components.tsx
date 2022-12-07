import styled from 'styled-components';
import { HeadlineSettings, ParagraphSettings } from '../theme/typography';
import { HeadlineProps, ParagraphProps } from '../types/props';

export const Headline = styled.h1<HeadlineProps>`
  margin: 0;
  ${HeadlineSettings}
`;

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  ${ParagraphSettings}
`;

export const Wrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    padding: 0px 16px;
  }
`;
