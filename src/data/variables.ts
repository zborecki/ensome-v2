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
    label: 'Data analytics performed by Ensome',
    value: '220'
  },
  {
    label: 'Data management performed by Ensome',
    value: '390'
  },
  {
    label: "Customers are satisfied with Ensome's work",
    value: '834+'
  },
  {
    label: 'Projects implemented by Ensome',
    value: '1830+'
  }
];
