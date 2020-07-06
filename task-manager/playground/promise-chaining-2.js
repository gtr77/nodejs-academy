require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findOneAndDelete('5efe2cffb213582d7014ee4c').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: true })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})