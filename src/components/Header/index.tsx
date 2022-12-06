import { NavLink } from 'react-router-dom';
import { LinkType } from '../../types/common';
import { Wrapper } from '../styled.components';
import { HeaderRoot, Navigation } from './header.style';
import dictionary from '../../data/dictionary';
import { links } from '../../data/variables';
import Logo from '../Logo';
import { MobileProps } from '../../types/props';
import Hamburger from '../Hamburger';

const { navigation } = dictionary;
const navigationItems: LinkType[] = [
  {
    label: navigation.home,
    link: links.home
  },
  {
    label: navigation.services,
    link: links.services
  },
  {
    label: navigation.blog,
    link: links.blog
  },
  {
    label: navigation.faq,
    link: links.faq
  },
  {
    label: navigation.contacts,
    link: links.contacts
  }
];

const Header = ({ isOpened, onClick }: MobileProps): JSX.Element => (
  <HeaderRoot
    className="header"
    isOpened={isOpened}
  >
    <Wrapper className="header__wrapper">
      <Logo className="header__logo" />
      <Hamburger
        className="header__hamburger"
        onClick={onClick}
        isOpened={isOpened}
      />
      <Navigation
        className="header__navigation"
        isOpened={isOpened}
      >
        <ul className="navigation__list">
          {
              navigationItems.map(({ label, link }, index) => (
                <li
                  className="navigation__item"
                  key={`${label}-${index}`}
                >
                  <NavLink
                    className="navigation__link"
                    end
                    to={link}
                  >
                    { label }
                  </NavLink>
                </li>
              ))
            }
        </ul>
      </Navigation>
    </Wrapper>
  </HeaderRoot>
);

export default Header;
