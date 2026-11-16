import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import { foundationModules } from './src/data/foundation-modules.mjs';

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

// Short, learner-focused navigation. The full Obsidian lesson tree remains
// available in a separate collapsed section without moving any lesson URLs.
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
      ],

      sidebar: [
        {
          label: 'Start Learning',
          items: [
            { label: 'Foundation Home', link: '/' },
            { label: 'Start Here', link: '/start-here/' },
            { label: 'Explore 16 Modules', link: '/curriculum/' },
            { label: 'Core IT & DevOps Deep-Dive', link: '/core-it-devops/' },
            { label: '12-Week Study Plan', link: '/study-plan/' },
          ],
        },
        {
          label: 'Foundation Learning Stages',
          items: [
            {label: '01 · Core IT & DevOps', collapsed: true, items: moduleLinks('core')},
            {label: '02 · Cloud & Cybersecurity', collapsed: true, items: moduleLinks('security')},
            {label: '03 · Enterprise & Professional', collapsed: true, items: moduleLinks('professional')},
          ],
        },
        {
          label: 'All Foundation Lessons',
          collapsed: true,
          items: [{autogenerate: {directory: 'foundation'}}],
        },
        {
          label: 'Career Roadmaps',
          collapsed: true,
          items: [
            {label: 'Cloud Security Engineer · Full Guide', link: '/learning-hub/cloud-security-roadmap/'},
          ],
        },
        {
          label: 'Certification Guides',
          collapsed: true,
          items: [
            {label: 'AWS Cloud Practitioner · CLF-C02', link: '/learning-hub/aws-clf-c02/'},
          ],
        },
        {
          label: 'IT Interview Preparation',
          collapsed: true,
          items: [
            {label: 'Complete Interview Handbook', link: '/learning-hub/it-interview/'},
          ],
        },
        {
          label: 'Academy & GHC Labs',
          collapsed: true,
          items: [
            {label: 'GHC Labs Overview', link: '/ghc-labs/'},
            {label: 'How Labs Work', link: '/ghc-labs/how-it-works/'},
            {label: 'Explore 13 Academy Tracks', link: '/ghc-labs/track-selection/'},
            {label: 'Demo Video', link: '/ghc-labs/instructor-demo/'},
            {label: 'Membership & FAQs', link: '/ghc-labs/faq/'},
          ],
        },
      ],
    }),
  ],
});