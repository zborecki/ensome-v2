import { useTheme } from 'styled-components';
import { FooterProps } from '../../types/props';
import Logo from '../Logo';
import { Headline, Paragraph, Wrapper } from '../styled.components';
import { FooterRoot } from './footer.style';
import dictionary from '../../data/dictionary';

const { footer, contact } = dictionary;

const Footer = ({ style }: FooterProps): JSX.Element => {
  const { footer: { color } } = useTheme();

  return (
    <FooterRoot
      className="footer"
      style={style}
    >
      <Wrapper className="footer__wrapper">
        <div className="footer__upper">
          <div className="footer__company">
            <Logo className="footer__logo" />
            <Paragraph
              variant="p3-regular"
              className="footer__description"
            >
              { footer.description }
            </Paragraph>
          </div>
          <div className="footer__contact">
            <Headline
              color={color}
              className="contact__headline"
              variant="h6"
            >
              { contact.headline }
            </Headline>
            <Paragraph
              variant="p3-regular"
              className="contact__email"
            >
              { contact.email }
            </Paragraph>
            <Paragraph
              variant="p3-regular"
              className="contact__address"
            >
              { contact.address }
            </Paragraph>
          </div>
        </div>
        <div className="footer__bottom">
          <Paragraph
            variant="p3-regular"
            className="footer__copyrights"
          >
            { footer.copyrights }
          </Paragraph>
          <div className="footer__links">
            <Paragraph
              variant="p3-regular"
              className="footer__privacy"
            >
              { footer.privacy }
            </Paragraph>
            <Paragraph
              variant="p3-regular"
              className="footer__terms"
            >
              { footer.terms }
            </Paragraph>
          </div>
        </div>
      </Wrapper>
    </FooterRoot>
  );
};

export default Footer;
