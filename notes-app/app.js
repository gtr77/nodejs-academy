const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Gustavo.');

fs.appendFileSync('notes.txt', ' I live in Bogota.');
