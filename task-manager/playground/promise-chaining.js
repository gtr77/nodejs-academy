require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5efe1ec3d2cc5024e0699d77', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})