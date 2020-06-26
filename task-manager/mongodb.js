// CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    console.log('Successful Connection');
    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'Gustavo',
        age: 29
    }, (error, result) => {
        if (error){
            return console.log('Unable to insert an user!');
        }
        // Show document or Object ready to be inserted in MongoDB
        console.log(result.ops)
    })
});

// node mongodb.js --> To test connection