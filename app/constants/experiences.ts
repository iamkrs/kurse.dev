import { Experience } from 'app/types';

export const EXPERIENCE_TITLE_MARGIN_TOP = 18;

export const EXPERIENCES: Experience[] = [
  {
    name: 'Hero99',
    position: 'fullStackDev',
    description: ['hero99Tests', 'hero99Mobile', 'hero99Social'],
    startDate: '2022-03',
  },
  {
    name: 'Freelancer',
    position: 'fullStackDev',
    description: ['freelancerWeb', 'freelancerMobile', 'freelancerFigma'],
    startDate: '2020-01',
    endDate: '2022-03',
  },
  {
    name: 'OctoXB',
    position: 'fullStackDev',
    description: ['octoXBSearch', 'octoXBEcommerce', 'octoXBMaintenance'],
    startDate: '2017-08',
    endDate: '2020-01',
  },
  {
    name: 'Agência Magento',
    position: 'frontendDev',
    description: [
      'agenciaMagentoThemes',
      'agenciaMagentoUX',
      'agenciaMagentoCollaboration',
    ],
    startDate: '2014-09',
    endDate: '2017-08',
  },
];
