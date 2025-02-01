/**
 * Module for creating a new project based on the specified framework and language.
 */

import * as fs from 'fs-extra';
import * as path from 'path';
import frameworks from './frameworks';

/**
 * Initializes a new project by copying the corresponding template.
 *
 * @param framework - The chosen framework (e.g., 'react', 'vue', 'svelte', 'next')
 * @param projectName - The new project folder name
 * @param language - The chosen language ('javascript' or 'typescript')
 */
export function initProject(framework: string, projectName: string, language: string): void {
  // Retrieve the mapping for the specified framework.
  const frameworkTemplates = frameworks[framework];
  if (!frameworkTemplates) {
    console.error(
      `Unsupported framework: "${framework}". Supported frameworks are: ${Object.keys(frameworks).join(', ')}`
    );
    process.exit(1);
  }

  // Retrieve the template path for the chosen language.
  const templatePath = frameworkTemplates[language];
  if (!templatePath) {
    console.error(`Unsupported language: "${language}". Supported languages are: javascript, typescript.`);
    process.exit(1);
  }

  // Determine the destination directory (current working directory + project name)
  const destination = path.join(process.cwd(), projectName);

  // Copy the template folder to the destination.
  fs.copy(templatePath, destination)
    .then(() => {
      console.log(`Project "${projectName}" created successfully using ${framework} with ${language}.`);
    })
    .catch(err => {
      console.error('Error creating project:', err);
      process.exit(1);
    });
}
