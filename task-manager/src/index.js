const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user');
const taskRouter = require('./routers/tasks');

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const bcrypt = require('bcryptjs');

const myFunction = async () => {
    const password = 'SomePass165425432??!!???';
    const hashedPassword = await bcrypt.hash(password, 8);
    // bcrypt.hash(password, 8); it takes 2 arguments pass and the rounds of the algorithm to be running
    // The recommended value by the creator is 8 and is a balance between Speed Server and Security

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('SomePass165425432??!!???', hashedPassword)
    console.log(isMatch)
};

myFunction()

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})