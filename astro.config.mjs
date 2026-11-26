import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import { foundationModules } from './src/data/foundation-modules.mjs';
import {ghcCareerPathways,ghcCareerURL,ghcCertURL,ghcInterviewURL} from './src/data/ghc-career-pathways.mjs';

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
        './src/styles/landing-layout.css',
      ],

      sidebar: [
        {
          label: 'Explore GoHackersCloud',
          items: [
            { label: 'Foundation Home', link: '/' },
            { label: 'About GoHackersCloud', link: '/about-gohackerscloud/' },
            { label: 'Complete Promotional Catalog', link: '/about-gohackerscloud/catalog/' },
            { label: 'Courses & Bundles', link: '/about-gohackerscloud/courses/' },
            { label: 'Test Engine & Mock Exams', link: '/about-gohackerscloud/test-engine/' },
            { label: 'Cybersecurity Services', link: '/about-gohackerscloud/cybersecurity-services/' },
            { label: 'GHC Labs & Academy', link: '/ghc-labs/' },
            { label: 'Academy Lab Lesson Directory', link: '/about-gohackerscloud/lab-directory/' },
            { label: 'Start Here · Free Foundation', link: '/start-here/' },
            { label: '7-Day Free Foundation Challenge', link: '/7-day-challenge/' },
            { label: 'Career & Portfolio Hub', link: '/portfolio/' },
            { label: 'Student Learning Path', link: '/paths/students/' },
            { label: 'Professional Upskilling Path', link: '/paths/professionals/' },
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
          label: 'Portfolio Projects',
          collapsed: true,
          items: [
            {label: 'System Architecture & Inventory', link: '/portfolio/projects/system-architecture/'},
            {label: 'Network Troubleshooting', link: '/portfolio/projects/network-troubleshooting/'},
            {label: 'Cloud IAM Least Privilege', link: '/portfolio/projects/cloud-iam-review/'},
            {label: 'API Authorization Test Plan', link: '/portfolio/projects/api-authorization/'},
            {label: 'SOC Alert Triage', link: '/portfolio/projects/soc-alert-triage/'},
            {label: 'Git & DevSecOps Review', link: '/portfolio/projects/git-devsecops-review/'},
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
            {label: 'AWS Cloud Practitioner · 14-chapter Guide', link: '/learning-hub/aws-clf-c02/'},
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
            {label: 'GHC Labs Overview', link: '/ghc-labs/'},
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