import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps } from '../../types/props';
import { ButtonRoot } from './button.style';

const Button = ({
  className, icon, children, link, variant, size, type
}: ButtonProps): JSX.Element => (
  <ButtonRoot
    className={className}
    to={link}
    variant={variant}
    size={size}
    icon={icon}
    type={type}
  >
    {
      icon && (
        <FontAwesomeIcon
          className="button__icon"
          icon={icon}
          fontSize="28px"
        />
      )
    }
    <span className="button__label">{ children }</span>
  </ButtonRoot>
);

export default Button;
