#!/usr/bin/env node --no-warnings
/**
 * CLI entry point for ProjectInit.
 * This script bootstraps a new project based on the selected project type, framework, project name, and language.
 *
 * Usage:
 *   projectinit <projectType> <framework> <projectName> <language>
 * If any arguments are missing, the user will be prompted interactively.
 */

console.log("Loading ProjectInit...");

import inquirer from 'inquirer';
import { initProject } from '../lib/commands/createProject';

// Retrieve command-line arguments (skipping the node executable and script path)
const args: string[] = process.argv.slice(2);

/**
 * Prompts the user for the project type, framework, project name, and language.
 * @returns An object containing the selected projectType, framework, projectName, and language.
 */
async function promptUser(): Promise<{
  projectType: string;
  framework: string;
  projectName: string;
  language: string;
}> {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'Choose your project type:',
      choices: [
        { name: 'Frontend Framework', value: 'frontend' },
        { name: 'Backend Framework', value: 'backend' },
        { name: 'Full-stack Framework', value: 'fullstack' }
      ]
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Choose your framework:',
      choices: (answers) => {
        if (answers.projectType === 'frontend') {
          return ['React', 'Vue', 'Svelte'];
        } else if (answers.projectType === 'backend') {
          return ['Express', 'more coming soon'];
        } else if (answers.projectType === 'fullstack') {
          return ['Next.js', 'Nuxt'];
        }
        return [];
      }
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
      validate: (input: string) =>
        input && input.trim() !== '' ? true : 'Project name cannot be empty'
    },
    {
      type: 'list',
      name: 'language',
      message: 'Choose the language:',
      choices: (answers) => {
        if (answers.framework === 'Nuxt') {
          return [
            { name: 'JavaScript <-- not available for Nuxt', value: 'javascript', disabled: true },
            { name: 'TypeScript', value: 'typescript' }
          ];
        }
        return [
          { name: 'JavaScript', value: 'javascript' },
          { name: 'TypeScript', value: 'typescript' }
        ];
      }
    }
  ]);
}

/**
 * Main function that determines input method (arguments or prompt) and initializes the project.
 */
async function main(): Promise<void> {
  let projectType: string;
  let framework: string;
  let projectName: string;
  let language: string;

  // Expecting four arguments: projectType, framework, projectName, language.
  if (args.length >= 4) {
    projectType = args[0].toLowerCase();
    framework = args[1].toLowerCase();
    projectName = args[2];
    language = args[3].toLowerCase();

    if (!['frontend', 'backend', 'fullstack'].includes(projectType)) {
      console.error('Project type must be one of: frontend, backend, fullstack.');
      process.exit(1);
    }
    if (projectType === 'frontend' && !['react', 'vue', 'svelte'].includes(framework)) {
      console.error('For frontend project type, framework must be one of: react, vue, svelte.');
      process.exit(1);
    }
    if (projectType === 'backend' && !['express', 'more coming soon'].includes(framework)) {
      console.error('For backend project type, framework must be either "express" or "more coming soon".');
      process.exit(1);
    }
    if (projectType === 'fullstack' && !['nextjs', 'more coming soon'].includes(framework)) {
      console.error('For full-stack project type, framework must be either "nextjs" or "more coming soon".');
      process.exit(1);
    }
    if (!['javascript', 'typescript'].includes(language)) {
      console.error('Language must be either "javascript" or "typescript".');
      process.exit(1);
    }
  } else {
    // Otherwise, prompt the user interactively.
    const answers = await promptUser();
    projectType = answers.projectType;
    framework = answers.framework;
    projectName = answers.projectName;
    language = answers.language;
  }

  // If the user selects "more coming soon", exit with a message.
  if (framework === 'more coming soon') {
    console.error('Selected framework is not yet supported. Please try another framework.');
    process.exit(1);
  }

  // Initialize the project by copying the appropriate template.
  initProject(framework, projectName, language);
}

// Execute the main function and handle any errors.
main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
