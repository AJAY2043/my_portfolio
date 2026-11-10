// Project data — edit this file to add/update projects without touching component code.
// Each project needs: id, title, description, image, tags, links, and a 'featured' flag.
//
// IMPORTANT: replace the placeholder image imports below once you confirm which
// screenshots you want for each project. For now they reuse asset-pack images
// as temporary placeholders so the grid renders correctly.

import tecworkzImg from '../Assets/lifestyle-day-skyline-river.jpg'; // TODO: replace with real TecWorkz screenshot
import placeholderImg from '../Assets/lifestyle-coast-cliffs-wide.jpg'; // TODO: replace with real project screenshots

export const PROJECTS = [
  {
    id: 'tecworkz',
    title: 'TecWorkz',
    subtitle: 'Real freelance client project',
    description:
      'Full production website built for a Melbourne IT services firm — from first commit to live deployment. Includes custom design system, working contact form, SEO setup, and a custom domain.',
    image: tecworkzImg,
    tags: ['React', 'Framer Motion', 'EmailJS', 'Netlify', 'SEO'],
    liveUrl: 'https://tecworkz.com.au',
    githubUrl: 'https://github.com/AJAY2043/tecworkz',
    featured: true,
  },
  {
    id: 'whereismyforeman',
    title: 'WhereIsMyForeman',
    subtitle: 'Skilled-trades marketplace',
    description:
      'A marketplace for finding skilled trade professionals across eight categories, with worker listing and detail pages, a saved-favourites list held in React Context, and account sign-up through Firebase.',
    image: placeholderImg,
    tags: ['React', 'React Router', 'Firebase'],
    liveUrl: '',
    githubUrl: 'https://github.com/AJAY2043/foreman-project',
    featured: false,
  },
  {
    id: 'reactshoppers',
    title: 'ReactShoppers',
    subtitle: 'E-commerce platform',
    description:
      'An e-commerce front-end built to practice product listing, cart logic, and state management patterns common in real online stores.',
    image: placeholderImg,
    tags: ['React', 'JavaScript', 'CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/AJAY2043',
    featured: false,
  },
  {
    id: 'runflat',
    title: 'RunFlat Tire Systems',
    subtitle: 'Business website',
    description:
      'A business website built around clear service presentation and lead-generation focused layout for a tire systems business.',
    image: placeholderImg,
    tags: ['React', 'CSS', 'Responsive Design'],
    liveUrl: '',
    githubUrl: 'https://github.com/AJAY2043',
    featured: false,
  },
  {
    id: 'iylanetwork',
    title: 'IylaNetwork',
    subtitle: 'Business website',
    description:
      'A clean, modern business website focused on simple navigation and clear calls to action.',
    image: placeholderImg,
    tags: ['React', 'CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/AJAY2043',
    featured: false,
  },
];