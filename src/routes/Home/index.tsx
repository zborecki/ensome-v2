import Hero from '../../components/Hero';
import dictionary from '../../data/dictionary';

const { home: { hero } } = dictionary;

const Home = (): JSX.Element => (
  <>
    <Hero
      headline={hero.headline}
      description={hero.description}
    />
    <div />
  </>
);

export default Home;
