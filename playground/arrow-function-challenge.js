// return this.tasks.filter((task) => task.completed === false )



//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: false
    },{
        text: 'Clean yard',
        completed: true
    }, {
        text: 'Film course',
        completed: true
    }],
    getTasksToDo () {
        return this.tasks.filter((task) => task.completed === false)
    }
}


console.log(tasks.getTasksToDo())