import { useTheme } from 'styled-components';
import { SectionProps } from '../../types/props';
import { Headline, Paragraph, Wrapper } from '../styled.components';
import { HeroRoot } from './hero.style';

const Hero = ({
  headline, description, children, className
}: SectionProps): JSX.Element => {
  const { hero } = useTheme();

  return (
    <HeroRoot className={className}>
      <Wrapper className={`hero__wrapper ${className}__wrapper`}>
        <Headline
          className={`hero__headline ${className}__headline`}
          color={hero.color}
          variant="h1"
        >
          { headline }
        </Headline>
        {
          description && (
            <div className={`hero__panel ${className}__panel`}>
              <Paragraph
                color={hero.color}
                variant="p2-regular"
                className={`hero__paragraph ${className}__paragraph`}
              >
                { description }
              </Paragraph>
              {
                children && (
                  <div className={`hero__interaction ${className}__interaction`}>
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
