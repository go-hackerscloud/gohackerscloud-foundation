import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import { foundationModules } from './src/data/foundation-modules.mjs';
import {ghcCareerPathways,ghcCareerURL,ghcCertURL,ghcInterviewURL} from './src/data/ghc-career-pathways.mjs';
import {foundationPortfolioGroups,foundationPortfolioProjects,foundationPortfolioURL} from './src/data/foundation-portfolio-projects.mjs';
import {ghcExploreGroups} from './src/data/ghc-explore-navigation.mjs';

const foundationStructuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GoHackersCloud Foundation',
  url: 'https://foundation.gohackerscloud.com/',
  description: 'Free practical learning in Cloud, Cybersecurity, AI, DevOps and Enterprise IT.',
  publisher: {
    '@type': 'Organization',
    name: 'GoHackersCloud',
    url: 'https://gohackerscloud.com/',
  },
});

// Keep the sidebar compact. The live lesson-by-lesson directory is rendered
// on /curriculum/; all Obsidian lesson URLs remain unchanged and navigable.
const moduleLinks = (category) => foundationModules
  .filter((module) => module.category === category)
  .map((module) => ({label: `${module.id} · ${module.title}`, link: module.link}));

export default defineConfig({
  site: 'https://foundation.gohackerscloud.com',

  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
  },
  integrations: [
    mermaid({theme: 'neutral',autoTheme: true,enableLog: false}),
    starlight({
      title: 'GoHackersCloud Foundation',

      head: [
        { tag: 'link', attrs: { rel: 'sitemap', href: '/sitemap-index.xml' } },
        { tag: 'script', attrs: { type: 'application/ld+json' }, content: foundationStructuredData },
      ],

      description:
        'Free practical learning in Cloud, Cybersecurity, AI, DevOps and Enterprise IT.',

      logo: {
        light: './src/assets/branding/logo-light.svg',
        dark: './src/assets/branding/logo-dark.svg',
        replacesTitle: true,
      },

      favicon: '/favicon.svg',

      social: [
        {
          icon: 'github',
          label: 'GoHackersCloud on GitHub',
          href: 'https://github.com/go-hackerscloud',
        },
      ],

      customCss: [
        './src/styles/common.css',
        './src/styles/components.css',
        './src/styles/foundation.css',
        './src/styles/landing-layout.css',
      ],

      sidebar: [
        {
          label: 'Explore GoHackersCloud',
          items: [
            {label: 'Explore Overview', link: '/explore/'},
            {label: 'Foundation Home', link: '/'},
            ...ghcExploreGroups.map(group=>({
              label: group.title,
              collapsed: true,
              items: group.links.map(link=>({label: link.label,link: link.href})),
            })),
          ],
        },
        {
          label: 'Foundation Learning Stages',
          items: [
            {label: 'Overview · Three Learning Stages', link: '/learning-stages/'},
            {label: '01 · Core IT & DevOps', collapsed: true, items: [
              {label: 'Stage 1 Overview', link: '/learning-stages/core/'},
              ...moduleLinks('core'),
            ]},
            {label: '02 · Cloud & Cybersecurity', collapsed: true, items: [
              {label: 'Stage 2 Overview', link: '/learning-stages/security/'},
              ...moduleLinks('security'),
            ]},
            {label: '03 · Enterprise & Professional', collapsed: true, items: [
              {label: 'Stage 3 Overview', link: '/learning-stages/professional/'},
              ...moduleLinks('professional'),
            ]},
          ],
        },
        {
          label: 'All Foundation Lessons',
          collapsed: true,
          items: [
            {label: 'Browse 16 Modules', link: '/curriculum/'},
            {label: 'Full Lesson-by-Lesson Syllabus', link: '/curriculum/#lesson-directory'},
            {label: 'Start Here · Beginner Path', link: '/start-here/'},
          ],
        },
        {
          label: 'Portfolio Projects',
          collapsed: true,
          items: [
            {label: 'Browse Six Guided Projects', link: '/portfolio/'},
            ...foundationPortfolioGroups.map(group=>({
              label: group.title,
              collapsed: true,
              items: foundationPortfolioProjects
                .filter(project=>project.group===group.id)
                .map(project=>({label: project.shortTitle,link:foundationPortfolioURL(project.id)})),
            })),
          ],
        },
        {
          label: 'Career Roadmaps',
          collapsed: true,
          items: [
            {label: 'Browse 9 Career Roadmaps', link: '/learning-hub/career-paths/'},
            ...ghcCareerPathways.map(role=>({label: role.title, link: ghcCareerURL(role.id)})),
          ],
        },
        {
          label: 'Certification Guides',
          collapsed: true,
          items: [
            {label: 'Compare 9 Certification Paths', link: '/learning-hub/certification-paths/'},
            ...ghcCareerPathways.map(role=>({label: role.title+' · Certifications', link: ghcCertURL(role.id)})),
          ],
        },
        {
          label: 'IT Interview Preparation',
          collapsed: true,
          items: [
            {label: 'Browse 9 Interview Question Sets', link: '/learning-hub/interview-paths/'},
            {label: 'Complete Interview Handbook · 14 chapters', link: '/learning-hub/it-interview/'},
            ...ghcCareerPathways.map(role=>({label: role.title+' · Questions', link: ghcInterviewURL(role.id)})),
          ],
        },
        {
          label: 'Academy & GHC Labs',
          collapsed: true,
          items: [
            {label: 'Academy & GHC Labs Hub', link: '/ghc-labs/'},
            {label: 'How Labs Work', link: '/ghc-labs/how-it-works/'},
            {label: 'Explore 13 Academy Tracks', link: '/ghc-labs/track-selection/'},
            {label: 'Five Lab Video Guides', link: '/ghc-labs/instructor-demo/'},
            {label: 'Membership & FAQs', link: '/ghc-labs/faq/'},
          ],
        },
      ],
    }),
  ],
});