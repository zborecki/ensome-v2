import { LinkType } from './common';

export interface BaseProps {
  className: string;
}

export interface HamburgerProps extends BaseProps {
  onClick: () => void;
  isOpened: boolean;
}

export interface HeaderProps {
  onClick: () => void;
  isOpened: boolean;
}

export interface NavigationProps extends BaseProps {
  items: LinkType[];
}
