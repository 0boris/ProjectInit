import * as fs from 'fs-extra';
import * as path from 'path';
import frameworks from './frameworks';
import { success } from '../functions';
import inquirer from 'inquirer';
import { exec } from 'child_process';

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
    .then(async () => {
      // Display success message with instructions.
      success(projectName);

      // Ask the user if they want to install dependencies automatically.
      const answer = await inquirer.prompt({
        type: 'confirm',
        name: 'install',
        message: 'Would you like to install dependencies automatically?',
        default: true,
      });

      if (answer.install) {
        console.log('Installing dependencies. This may take a moment...');
        exec('npm install', { cwd: destination }, (error, stdout, stderr) => {
          if (error) {
            console.error('Error installing dependencies:', error);
            process.exit(1);
          }
          console.log(stdout);
          console.log('Dependencies installed successfully!');
        });
      }
    })
    .catch(err => {
      console.error('Error creating project:', err);
      process.exit(1);
    });
}
