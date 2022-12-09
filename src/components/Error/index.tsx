import { Headline, Paragraph, Wrapper } from '../styled.components';
import dictionary from '../../data/dictionary';
import Button from '../Button';
import { ErrorRoot } from './error.style';

const { button, error404 } = dictionary;

const Error = (): JSX.Element => (
  <ErrorRoot>
    <Wrapper className="error__wrapper">
      <Headline
        className="error__code"
        variant="h1"
      >
        { error404.code }
      </Headline>
      <Headline
        className="error__information"
        variant="h2"
      >
        { error404.information }
      </Headline>
      <Paragraph
        variant="p1"
        className="error__description"
      >
        { error404.description }
      </Paragraph>
      <Button
        className="error__button"
        link="/"
        variant="primary"
        shadow
      >
        { button.returnToHome }
      </Button>
    </Wrapper>
  </ErrorRoot>
);

export default Error;
