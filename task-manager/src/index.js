const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Tasks = require('./models/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.post('/tasks', (req, res) => {
    const tasks = new Tasks(req.body)

    tasks.save().then(() => {
        res.send(tasks)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/tasks', (req, res) => {
    Tasks.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Tasks.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})