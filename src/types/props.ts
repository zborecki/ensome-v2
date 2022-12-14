import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { LinkType } from './common';

export interface BaseProps {
  className: string;
}

export interface ButtonProps extends BaseProps, ButtonRootProps {
  children: string;
  link: string;
}

export interface ButtonRootProps {
  variant?: 'secondary' | 'primary';
  size?: 'standard';
  icon?: IconDefinition;
  type?: 'outlined' | 'filled';
  shadow?: boolean;
}

export interface FooterProps {
  style?: React.CSSProperties;
}

export interface HeadlineProps extends BaseProps {
  variant: 'h1' | 'h2' | 'h6' | 'h7-semibold' | 'h4';
  color?: string;
  underlined?: boolean;
}

export type ImageProps = {
  parent: string;
  width: number;
} & LinkType;

export interface MobileProps {
  onClick: () => void;
  isOpened: boolean;
}

export interface NavigationProps extends BaseProps {
  items: LinkType[];
}

export interface ParagraphProps extends BaseProps {
  variant: 'p2-regular' | 'p1' | 'p3-regular';
  color?: string;
}

export interface SectionProps extends BaseProps {
  headline: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
}
