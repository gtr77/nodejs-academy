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
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value) {
            console.log("Password:", value)
            if (value.toLowerCase().includes('password') ) {
                throw new Error('Try with a password different to password')
            }
        }
    }
})

const me = new User({
    name: 'Stephany',
    email: 'gTr@gMail.com',
    password: '    6789fd87sa56987PASSwosrdHUILKJfdjsalñ   '
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(`Error!, ${error}`);
})

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const myTasks = new Tasks({
    description: '     sssCreate a Mongoose connectionSSSS  '
});

myTasks.save().then(() => {
    console.log(myTasks)
}).catch((error) => {
    console.log(`Error!, ${error}`);
})