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
    res.send("Help Express Page");
})
app.get('/about', (req, res) => {
    res.send("about Express Page");
})
app.get('/weather', (req, res) => {
    res.send("Weather Express Page");
})
app.listen(3000, () => {
    console.log('Server on 3000')
})

// app.com
// app.com/help
// app.com/about