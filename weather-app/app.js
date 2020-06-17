// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')
//
// const address = process.argv[2]
//
// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, { latitude, longitude, location }) => {
//         if (error) {
//             return console.log(error)
//         }
//
//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log(error)
//             }
//
//             console.log(location)
//             console.log(forecastData)
//         })
//     })
// }
const request = require("request");

const url = 'http://api.weatherstack.com/current?access_key=22908e476b3aed230dfc802bb0be595f&query=37.8267,-122-4233';

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});


