// CRUD

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // SEARCHING BY NAME
    // db.collection('users').findOne({ name: "Yecid" }, (error, user) => {
    // SEARCHING BY OBJECTID _id: new ObjectID("5ef64644ece6051c3028d6bf")
    // db.collection('users').findOne({ _id: new ObjectID("5ef64644ece6051c3028d6bf") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 29 }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 29 }).count((error, count) => {
    //     console.log(count)
    // })
    db.collection('users').findOne({ _id: new ObjectID("5ef64644ece6051c3028d6bf") }, (error, result) => {
        if (error) {
            return console.log(error)
        }
        console.log(result);
    });
    db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
        console.log(tasks)
    });

});

// node mongodb.js --> To test connection