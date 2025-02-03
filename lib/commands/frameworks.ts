import * as path from 'path';

type FrameworkTemplates = {
  [language: string]: string;
};

type FrameworkMapping = {
  [framework: string]: FrameworkTemplates;
};

const templates: FrameworkMapping = {
  // Frontend frameworks
  React: {
    javascript: path.join(__dirname, '../templates/react/js'),
    typescript: path.join(__dirname, '../templates/react/ts'),
  },
  Vue: {
    javascript: path.join(__dirname, '../templates/vue/js'),
    typescript: path.join(__dirname, '../templates/vue/ts'),
  },
  Svelte: {
    javascript: path.join(__dirname, '../templates/svelte/js'),
    typescript: path.join(__dirname, '../templates/svelte/ts'),
  },
  // Backend framework
  Express: {
    javascript: path.join(__dirname, '../templates/express/js'),
    typescript: path.join(__dirname, '../templates/express/ts'),
  },
  // Full-stack framework
  "Next.js": {
    javascript: path.join(__dirname, '../templates/next/js'),
    typescript: path.join(__dirname, '../templates/next/ts'),
  },
  Nuxt: {
    typescript: path.join(__dirname, '../templates/nuxt/ts'),
  }
};

export default templates;
