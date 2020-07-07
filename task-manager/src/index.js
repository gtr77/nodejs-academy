const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Tasks = require('./models/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/tasks', async (req, res) => {
    const tasks = new Tasks(req.body)
    try {
        const postedTasks = await tasks.save();
        res.status(201).send(tasks)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const getTasks = await Tasks.find({})
        res.send(getTasks);
    } catch (e) {
        res.status(500).send()
    }
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Tasks.findById(_id);
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)

    } catch (e) {
        res.status(500).send()
    }
})

app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['completed', 'description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }


    //
    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates!' })
    // }
    //
    // try {
    //     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    //
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //
    //     res.send(user)
    // } catch (e) {
    //     res.status(400).send(e)
    // }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})