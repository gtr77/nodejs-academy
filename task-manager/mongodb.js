// CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    // console.log('Successful Connection');
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Gustavo',
    //     age: 29
    // }, (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert an user!');
    //     }
    //     // Show document or Object ready to be inserted in MongoDB
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Laura',
    //         age: 28
    //     }, {
    //         name: 'Tyna',
    //         age: 22
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert Documents!');
    //     }
    //     console.log(result.ops)
    // })
    db.collection('tasks').insertMany([
        {
            description: 'Welcome to Mongo DB',
            completed: true
        },{
            description: 'Insert data into MongoDB',
            completed: true
        },{
            description: 'Filter data into MongoDB',
            completed: false
        }
    ], (error, result) => {
        if (error){
            return console.log("Unable to insert tasks collections");
        }
        console.log(result.ops);
    })
});

// node mongodb.js --> To test connection