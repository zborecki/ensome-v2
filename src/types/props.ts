import { LinkType } from './common';

export interface BaseProps {
  className: string;
}

export interface HeadlineProps extends BaseProps {
  variant: 'h1';
  color?: string;
}

export interface MobileProps {
  onClick: () => void;
  isOpened: boolean;
}

export interface NavigationProps extends BaseProps {
  items: LinkType[];
}

export interface ParagraphProps extends BaseProps {
  variant: 'p2-regular';
  color?: string;
}

export interface SectionProps {
  headline: string;
  description?: string;
  children?: JSX.Element[];
}
