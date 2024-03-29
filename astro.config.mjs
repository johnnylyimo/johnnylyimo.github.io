import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://johnnylyimo.github.io',
});

/** Project INFO
 * hosted on github: https://johnnylyimo.github.io/
 */