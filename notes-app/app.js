const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

const notes = getNotes();
const green = chalk.green.inverse.bold;
const blue = chalk.blue.inverse.bold;
const red = chalk.red.inverse.bold;


console.log(notes);
console.log("isURL?", validator.isURL('https/mead.io'));
console.log("isEmail?", validator.isEmail('bla@example.com'));
console.log(`Welcome to ${red('Node JS')} with ${blue('Chalk')}!`);

// Installing Nodemon in our App
// Run npm i -g nodemon ----> to install globally
// Instead node app.js ---> Use nodemon app.js
// With nodemon you can save changes and without re-run the app see the changes directly

// NODEMON WORKS WITHOUT RUN IT AGAIN
