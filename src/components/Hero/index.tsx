import { useTheme } from 'styled-components';
import { SectionProps } from '../../types/props';
import { Headline, Paragraph, Wrapper } from '../styled.components';
import { HeroRoot } from './hero.style';

const Hero = ({ headline, description, children }: SectionProps): JSX.Element => {
  const { hero } = useTheme();

  return (
    <HeroRoot className="hero">
      <Wrapper className="hero__wrapper">
        <Headline
          className="hero__headline"
          color={hero.color}
          variant="h1"
        >
          { headline }
        </Headline>
        {
          description && (
            <div className="hero__panel">
              <Paragraph
                color={hero.color}
                variant="p2-regular"
                className="hero__paragraph"
              >
                { description }
              </Paragraph>
              {
                children && (
                  <div className="hero__interaction">
                    { children }
                  </div>
                )
              }
            </div>
          )
        }
      </Wrapper>
    </HeroRoot>
  );
};

export default Hero;
