const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}

greeter('Andrew')

greeter()

// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {

    price: 3

}

const {label:productLabel, stock, rating = 5} = product;
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock, rating } = {}) => {
    console.log(type, label, stock, rating)
}

transaction('order', product)