import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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

export default defineConfig({
  site: 'https://foundation.gohackerscloud.com',

  integrations: [
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
          label: '🌍 Foundation Learning',
          items: [
            {
              autogenerate: {
                directory: 'foundation',
              },
            },
          ],
        },

        {
          label: '🛣️ Career Roadmaps',
          items: [
            {
              autogenerate: {
                directory: 'roadmaps',
              },
            },
          ],
        },

        {
          label: '📜 Certification Guides',
          items: [
            {
              autogenerate: {
                directory: 'certifications',
              },
            },
          ],
        },

        {
          label: '📚 Free Resources',
          items: [
            {
              autogenerate: {
                directory: 'resources',
              },
            },
          ],
        },
      ],
    }),
  ],
});