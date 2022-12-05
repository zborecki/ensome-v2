import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';
import { BaseProps } from '../../types/props';
import dictionary from '../../data/dictionary';
import { LogoRoot } from './logo.style';

const { logo: { companyName } } = dictionary;

const Logo = ({ className }: BaseProps): JSX.Element => {
  const { logo } = useTheme();

  return (
    <LogoRoot className={`${className} logo`}>
      <FontAwesomeIcon
        className="logo__icon"
        icon={faPaperclip}
        fontSize="36px"
        color={logo.color}
      />
      <span className="logo__companyName">{ companyName }</span>
    </LogoRoot>
  );
};

export default Logo;
