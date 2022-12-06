import { LinkType } from './common';

export interface BaseProps {
  className: string;
}

export interface MobileProps {
  onClick: () => void;
  isOpened: boolean;
}

export interface NavigationProps extends BaseProps {
  items: LinkType[];
}
