/**
 * Module that maps supported frameworks to their respective template directories,
 * separated by language.
 */

import * as path from 'path';

type FrameworkTemplates = {
  [language: string]: string;
};

type FrameworkMapping = {
  [framework: string]: FrameworkTemplates;
};

const templates: FrameworkMapping = {
  react: {
    javascript: path.join(__dirname, '../templates/react/js'),
    typescript: path.join(__dirname, '../templates/react/ts')
  },
  vue: {
    javascript: path.join(__dirname, '../templates/vue/js'),
    typescript: path.join(__dirname, '../templates/vue/ts')
  },
  svelte: {
    javascript: path.join(__dirname, '../templates/svelte/js'),
    typescript: path.join(__dirname, '../templates/svelte/ts')
  }
};

export default templates;
