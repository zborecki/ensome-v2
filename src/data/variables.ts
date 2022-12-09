import { FeatureType, OverviewType } from '../types/common';
import dictionary from './dictionary';
import platformImage from '../assets/platform.png';
import newSolutionsImage from '../assets/new-solutions.png';

const { button, features: { platform, newSolutions } } = dictionary;

export const features: FeatureType[] = [
  {
    headline: platform.headline,
    description: platform.description,
    button: button.learnMore,
    image: platformImage,
    link: '/'
  },
  {
    headline: newSolutions.headline,
    description: newSolutions.description,
    button: button.learnMore,
    image: newSolutionsImage,
    link: '/'
  }
];

export const links = {
  home: '/',
  services: 'services',
  blog: 'blog',
  faq: 'faq',
  contacts: 'contacts'
};

export const overviews: OverviewType[] = [
  {
    label: 'Data analytics',
    value: '220'
  },
  {
    label: 'Data management',
    value: '390'
  },
  {
    label: 'Satisfied customers',
    value: '834+'
  },
  {
    label: 'Implemented projects',
    value: '1830+'
  }
];
