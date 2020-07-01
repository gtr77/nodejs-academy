const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                console.log(value)
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})

const me = new User({
    name: 'Stephany',
    email: 'gTr@gMail.com'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(`Error!, ${error}`);
})

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const myTasks = new Tasks({
    description: 'Create a Mongoose connection',
    completed: true
});

myTasks.save().then(() => {
    console.log(myTasks)
}).catch((error) => {
    console.log(`Error!, ${error}`);
})