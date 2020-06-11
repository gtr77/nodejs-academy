const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note! with: ' +argv.title);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Description text',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Removing a note! Title: ' +argv.title+ " Description: " +argv.description);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()
// console.log(yargs.argv)


// NOTES: THESE ARE A FEW COMMANDS IN ORDER TO PLAY WITH VALUES

/*
    node app.js add --title="Title: NodeJSTraining"
    node app.js remove --description="This line remove a note"

 */