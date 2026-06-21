// Skill categories shown as filter tabs above the orbit.
// Each skill needs: name, icon (Font Awesome), and level (used for the progress bars).
import {
  faReact,
  faJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faNodeJs,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faNetworkWired,
  faShieldHalved,
  faCloud,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'JavaScript', icon: faJs, level: 75 },
      { name: 'Python', icon: faPython, level: 70 },
      { name: 'HTML5', icon: faHtml5, level: 85 },
      { name: 'CSS3', icon: faCss3Alt, level: 80 },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: [
      { name: 'React.js', icon: faReact, level: 78 },
      { name: 'Node.js', icon: faNodeJs, level: 60 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud / Networking',
    skills: [
      { name: 'Microsoft Azure', icon: faMicrosoft, level: 50 },
      { name: 'Networking', icon: faNetworkWired, level: 68 },
      { name: 'Cybersecurity', icon: faShieldHalved, level: 65 },
      { name: 'Cloud Concepts', icon: faCloud, level: 55 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', icon: faGitAlt, level: 75 },
      { name: 'GitHub', icon: faGithub, level: 75 },
      { name: 'VS Code', icon: faCode, level: 85 },
      { name: 'SQL / Databases', icon: faDatabase, level: 60 },
    ],
  },
];