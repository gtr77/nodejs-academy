const express = require('express');

const app = express();
// res.render('index', {
//     title: 'Weather',
//     name: 'Andrew Mead'
// })
app.get('', (req, res) => {
    res.send("Hello Express");
})
app.get('/help', (req, res) => {
    res.send("<h1>Help Page</h1>");
})
app.get('/challenge', (req, res) => {
    res.send("<h1>Challenge Page</h1>");
})
app.get('/about', (req, res) => {
    res.send([
        {
            title: 'Weather'
        },
        {
            name: 'Gustavo Romero'
        }
    ]);
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: "Its raining",
        location: "Philadelphia"
    });
})
app.listen(3000, () => {
    console.log('Server on 3000')
})

// app.com
// app.com/help
// app.com/about