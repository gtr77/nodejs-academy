const path = require('path');
const express = require('express');
const hbs = require('hbs')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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

app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.send({
            error: 'You must provide a address'
        });
    }
    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error){
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return res.send({ error });
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            });

        });
    })
});

app.get('/products', (req, res) => {
    if (!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        });
    }

    console.log(req.query.search);
    res.send({
        products: [],
        address: ''
    });
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Gustavo',
        author: 'Beethoven',
        errorMessage: "Help Article Page 404 not found"
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Gustavo',
        author: 'Beethoven',
        errorMessage: "Page 404 not found"
    });
})
app.listen(3000, () => {
    console.log('Server on 3000')
})