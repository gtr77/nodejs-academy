require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findOneAndDelete('5efe2cffb213582d7014ee4c').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: true })
    return count;
};
deleteTaskAndCount('5efe2d10b213582d7014ee4d').then((results) => {
    console.log(results)
}).catch((e) => {
    console.log(e)
})