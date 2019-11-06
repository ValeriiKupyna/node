const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

yargs.version('1.1.0');

yargs.command(
  'add',
  'add a new node',
  {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  function (argv) {
    console.log('title: ', argv.title);
    console.log('body: ', argv.body);
  }
);

yargs.command(
  'remove',
  'remove a node',
  function () {
    console.log('remove a node')
  }
);

yargs.command(
  'list',
  'list of notes',
  () => console.log('List of notes!')
);

yargs.command(
  'read',
  'read notes',
  () => console.log('Read notes!')
);

yargs.parse();