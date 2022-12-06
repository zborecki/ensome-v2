import { MobileProps, BaseProps } from '../../types/props';
import { HamburgerRoot } from './hamburger.style';

const Hamburger = ({ className, onClick, isOpened }: MobileProps & BaseProps): JSX.Element => (
  <HamburgerRoot
    className={className}
    onClick={onClick}
    isOpened={isOpened}
    type="button"
  >
    <div className="hamburger__wrapper">
      <div className="hamburger__line" />
    </div>
  </HamburgerRoot>
);

export default Hamburger;
