const program = require('commander');

// Version
program.version('0.0.1');

// Description
program.description('The EZ Active command line interface (CLI)');

program.parse(process.argv);

// Show help if no command was executed
if (program.args.length === 0) {
  console.log('Welcome to EZ Active CLI!');
}
