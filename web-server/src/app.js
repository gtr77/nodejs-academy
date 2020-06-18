const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath));

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