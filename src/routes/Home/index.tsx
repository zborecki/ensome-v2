import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import Blog from '../../components/Blog';
import Button from '../../components/Button';
import Features from '../../components/Features';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Reviews from '../../components/Reviews';
import dictionary from '../../data/dictionary';
import { ButtonProps } from '../../types/props';

const { button, home: { hero } } = dictionary;

const heroButtons: ButtonProps[] = [
  {
    className: 'home-hero__button home-hero__button--filled',
    link: '/',
    variant: 'secondary',
    children: button.learnMore
  },
  {
    className: 'home-hero__button home-hero__button--outlined',
    link: '/',
    variant: 'secondary',
    type: 'outlined',
    icon: faCirclePlay,
    children: button.watchTheDemo
  }
];

const Home = (): JSX.Element => (
  <>
    <Hero
      className="home-hero"
      headline={hero.headline}
      description={hero.description}
    >
      {
        heroButtons.map(({
          className, link, variant, type, icon, children
        }, index) => (
          <Button
            key={`${children}-${index}`}
            className={className}
            link={link}
            variant={variant}
            type={type}
            icon={icon}
          >
            { children }
          </Button>
        ))
      }
    </Hero>
    <Features className="home-features" />
    <Overview />
    <Reviews />
    <Blog />
  </>
);

export default Home;
