const path = require('path');
const express = require('express');

const app = express();

// PATHS FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates');

// SETUP HABDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs');
app.set('views', viewsPath)

// SETUP STATIC DIRECTORY
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Gustavo Romero'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        description: 'Show something about you'
    });
});
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP!!!!',
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