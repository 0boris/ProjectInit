#!/usr/bin/env node
/**
 * CLI entry point for ProjectInit.
 * This script bootstraps a new project based on the selected framework and language.
 *
 * Usage:
 *   projectinit <framework> <projectName> <language>
 * If any arguments are missing, the user will be prompted interactively.
 */

import inquirer from 'inquirer';
import { initProject } from '../lib/commands/createProject';

// Retrieve command-line arguments (skipping node executable and script path)
const args: string[] = process.argv.slice(2);

/**
 * Prompts the user for the framework, project name, and language.
 * @returns An object containing the selected framework, projectName, and language.
 */
async function promptUser(): Promise<{ framework: string; projectName: string; language: string }> {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Choose a framework:',
      choices: ['react', 'vue', 'svelte', 'next']
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
      choices: [
        { name: 'JavaScript', value: 'javascript' },
        { name: 'TypeScript', value: 'typescript' }
      ]
    }
  ]);
}

/**
 * Main function that determines input method (arguments or prompt) and initializes the project.
 */
async function main(): Promise<void> {
  let framework: string;
  let projectName: string;
  let language: string;

  // Expecting three arguments: framework, projectName, language.
  if (args.length >= 3) {
    framework = args[0].toLowerCase();
    projectName = args[1];
    language = args[2].toLowerCase();
    if (!['react', 'vue', 'svelte', 'next'].includes(framework)) {
      console.error('Framework must be one of: react, vue, svelte, next.');
      process.exit(1);
    }
    if (!['javascript', 'typescript'].includes(language)) {
      console.error('Language must be either "javascript" or "typescript".');
      process.exit(1);
    }
  } else {
    // Otherwise, prompt the user interactively.
    const answers = await promptUser();
    framework = answers.framework;
    projectName = answers.projectName;
    language = answers.language;
  }

  // Initialize the project by copying the appropriate template.
  initProject(framework, projectName, language);
}

// Execute the main function and handle any errors.
main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
