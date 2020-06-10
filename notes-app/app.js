const validator = require('validator');
const getNotes = require('./notes.js');

const notes = getNotes();

console.log(notes);
console.log("isURL?", validator.isURL('https/mead.io'));
console.log("isEmail?", validator.isEmail('bla@example.com'));
