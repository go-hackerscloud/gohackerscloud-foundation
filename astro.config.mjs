import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://academy.gohackerscloud.com',

  integrations: [
    starlight({
      title: 'GoHackersCloud Academy',

      description:
        'Practical career learning paths, hands-on labs, enterprise runbooks and real-world projects.',

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
        './src/styles/academy.css',
      ],

      sidebar: [
        {
          label: '☁️ Cloud Security Engineer',
          items: [
            {
              autogenerate: {
                directory: 'academy/cloud-security-engineer',
              },
            },
          ],
        },
      ],
    }),
  ],
});