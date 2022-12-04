import { LinkType } from './common';

export interface BaseProps {
  className: string;
}

export interface NavigationProps extends BaseProps {
  items: LinkType[];
}
