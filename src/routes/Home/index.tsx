import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import dictionary from '../../data/dictionary';

const { button, home: { hero } } = dictionary;
const className: string = 'home-hero';

const Home = (): JSX.Element => (
  <>
    <Hero
      className={className}
      headline={hero.headline}
      description={hero.description}
    >
      <Button
        className={`${className}__button ${className}__button--filled`}
        link="/"
        variant="secondary"
      >
        { button.learnMore }
      </Button>
      <Button
        className={`${className}__button ${className}__button--outlined`}
        link="/"
        variant="secondary"
        icon={faCirclePlay}
        type="outlined"
      >
        { button.watchTheDemo }
      </Button>
    </Hero>
    <div />
  </>
);

export default Home;
