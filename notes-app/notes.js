const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Get notes!';

const addNote = (title, body) => {
  const notes = loadNotes();

  if (!notes.some((note) => note.title === title)) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('Note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const keepNotes = notes.filter((note) => note.title !== title);

  if(notes.length === keepNotes.length) {
    console.log(chalk.red.inverse('No note found!'))
  } else {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(keepNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('Your Notes:'));
  notes.forEach(({ title }) => console.log(title));
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find(note => note.title === title);

  if(note) {
    console.log(chalk.green.inverse(`Note ${note.title}`));
    console.log(chalk.green(`${note.body}`));
  } else {
    console.log(chalk.red.inverse(`Note with title: ${title} do not found`));
  }
};

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }

};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};