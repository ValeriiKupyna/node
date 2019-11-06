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
  (argv) => notes.addNote(argv.title, argv.body)
);

yargs.command(
  'remove',
  'remove a node',
  {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  (argv) => notes.removeNote(argv.title)
);

yargs.command(
  'list',
  'list of notes',
  notes.listNotes
);

yargs.command(
  'read',
  'read notes',
  {
    title: {
      describe: 'Read note',
      demandOption: true,
      type: 'string'
    }
  },
  (argv) => notes.readNote(argv.title)
);

yargs.parse();