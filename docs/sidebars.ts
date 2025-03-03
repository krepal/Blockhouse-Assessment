import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', 
      label: 'Introduction', 
    },
    {
      type: 'doc',
      id: 'getting-started', 
      label: 'Getting Started', 
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/api-integration',
        'architecture/state-management',
      ],
    },
    {
      type: 'doc',
      id: 'challenges', 
      label: 'Challenges and Solutions',
    },
  ],
};

export default sidebars;