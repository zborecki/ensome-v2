import { NavLink } from 'react-router-dom';
import { LinkType } from '../../types/common';
import { Wrapper } from '../styled.components';
import { HeaderRoot } from './header.style';
import dictionary from '../../data/dictionary';
import { links } from '../../data/variables';
import Logo from '../Logo';

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

const Header = (): JSX.Element => (
  <HeaderRoot className="header">
    <Wrapper className="header__wrapper">
      <Logo className="header__logo" />
      <nav className="header__navigation">
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
      </nav>
    </Wrapper>
  </HeaderRoot>
);

export default Header;
