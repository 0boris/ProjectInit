import * as path from 'path';

type FrameworkTemplates = {
  [language: string]: string;
};

type FrameworkMapping = {
  [framework: string]: FrameworkTemplates;
};

const templates: FrameworkMapping = {
  // Frontend frameworks
  react: {
    javascript: path.join(__dirname, '../templates/react/js'),
    typescript: path.join(__dirname, '../templates/react/ts'),
  },
  vue: {
    javascript: path.join(__dirname, '../templates/vue/js'),
    typescript: path.join(__dirname, '../templates/vue/ts'),
  },
  svelte: {
    javascript: path.join(__dirname, '../templates/svelte/js'),
    typescript: path.join(__dirname, '../templates/svelte/ts'),
  },
  // Backend framework
  express: {
    javascript: path.join(__dirname, '../templates/express/js'),
    typescript: path.join(__dirname, '../templates/express/ts'),
  },
  // Full-stack framework
  nextjs: {
    javascript: path.join(__dirname, '../templates/nextjs/js'),
    typescript: path.join(__dirname, '../templates/nextjs/ts'),
  }
};

export default templates;
