import { BaseProps } from '../../types/props';
import { Headline, Paragraph, Wrapper } from '../styled.components';
import { FeaturesRoot } from './features.style';
import { features } from '../../data/variables';
import Button from '../Button';
import Image from '../Image';

const Features = ({
  className
}: BaseProps): JSX.Element => (
  <FeaturesRoot className={className}>
    <Wrapper className={`features__wrapper ${className}__wrapper`}>
      {
        features.map(({
          headline, description, button, link, image
        }, index) => (
          <div
            className={`features__feature ${className}__feature`}
            key={`${className}__feature-${index}`}
          >
            <div className="feature__interaction">
              <Headline
                className="feature__headline"
                variant="h2"
                underlined
              >
                { headline }
              </Headline>
              <Paragraph
                variant="p1"
                className="feature__paragraph"
              >
                { description }
              </Paragraph>
              <Button
                className="feature__button"
                link={link}
                variant="primary"
                shadow
              >
                { button }
              </Button>
            </div>
            <Image
              width={540}
              parent="feature"
              link={image}
              label={headline}
            />
          </div>
        ))
      }
    </Wrapper>
  </FeaturesRoot>
);

export default Features;
