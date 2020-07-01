const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Gustavo',
    age: 'hola'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(`Error!, ${error}`);
})

const Task = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const myTasks = new tasks({
    description: 'Create a Mongoose connection',
    completed: true
});

myTasks.save().then(() => {
    console.log(myTasks)
}).catch((error) => {
    console.log(`Error!, ${error}`);
})