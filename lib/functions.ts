import pc from 'picocolors';
import boxen from 'boxen';

/**
 * Displays a success message box with instructions.
 *
 * @param {string} dirname - The directory name to display in the instructions.
 */
export function success(dirname: string) {
  // Define colored messages
  const a1 = pc.greenBright('Init Success!');
  const a2 = pc.blueBright('ProjectInit has scaffolded your application.');
  const a4 = pc.red('What to do:');
  const a5 = pc.redBright(`  cd ${dirname}`);
  const a6 = pc.redBright('  npm install');
  const a7 = pc.redBright('  npm run dev');

  // Build the complete message string with line breaks
  const message = [
    a1,
    '', // blank line for spacing
    a2,
    '',
    a4,
    a5,
    a6,
    a7,
  ].join('\n');

  // Configure boxen options
  const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round' as const,
    borderColor: 'cyan',
  };

  // Display the boxed message
  console.log(boxen(message, options));
}
