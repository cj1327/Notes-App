console.log("Starting app.js");

const yargs = require('yargs');
const notes = require('./notes');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if(command === "add"){
    console.log('Adding note');
    notes.addingNote(title, body);
} else if(command === "remove"){
    console.log('Removing note');
    notes.removeNote(title);
} else if(command === "read"){
    console.log('Reading note');
    notes.readNote(title);
} else if(command === "list"){
    console.log('Listing all notes');
    notes.getAll();
} else {
    console.log('unknown command used');
}