const fs = require('fs');

const book = JSON.parse(fs.readFileSync('playground/1-json.json').toString());

book.author = 'test';

fs.writeFileSync('playground/1-json.json', JSON.stringify(book));

