const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

const notes = getNotes();
const yellow = chalk.bold.yellow;
const red = chalk.bold.red;


console.log(notes);
console.log("isURL?", validator.isURL('https/mead.io'));
console.log("isEmail?", validator.isEmail('bla@example.com'));
console.log(`Welcome to ${yellow('Node JS')} with ${red('Chalk')}!`);
