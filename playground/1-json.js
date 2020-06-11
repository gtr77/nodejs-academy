const fs = require('fs');

const data = fs.readFileSync('1-json.json')
const dataString = data.toString()
const userInfo = JSON.parse(dataString)

userInfo.name = "Gustavo";
userInfo.age = 29;

const userChanged = JSON.stringify(userInfo);
fs.writeFileSync('1-json.json', userChanged);

// const fs = require('fs')
//
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const user = JSON.parse(dataJSON)
//
// user.name = 'Gunther'
// user.age = 54
//
// const userJSON = JSON.stringify(user)
// fs.writeFileSync('1-json.json', userJSON)

// const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// };
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json-book.json', bookJSON)
// const parsedBook = JSON.parse(bookJSON);
// console.log(book.author)
// console.log(bookJSON)
// console.log(parsedBook.title)

