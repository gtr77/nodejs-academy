const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();

// PATHS FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// SETUP HABDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// RUN: nodemon src\app.js -e js,hbs
// RUN: nodemon src\app.js -e js,hbs
// RUN: nodemon src\app.js -e js,hbs

// SETUP STATIC DIRECTORY
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Beethoven',
        name: 'Gustavo Romero'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        author: 'Beethoven',
        description: 'Show something about you'
    });
});
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        author: 'Beethoven',
        description: 'Anybody can help me?'
    });
});


// res.render('index', {
//     title: 'Weather',
//     name: 'Andrew Mead'
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: "Its raining",
        location: "Philadelphia"
    });
})
app.listen(3000, () => {
    console.log('Server on 3000')
})