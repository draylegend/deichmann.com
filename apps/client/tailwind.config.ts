import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import { join } from 'path';
import { Config } from 'tailwindcss';

export default {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      '1.25': '1.25rem',
    },
    colors: {
      black: 'black',
      white: 'white',
      green: '#00aa7a',
      red: '#e84747',
      gray: '#818788',
    },
    spacing: {
      '0.5': '0.5rem',
    },
  },
} satisfies Config;
