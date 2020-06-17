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

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3RyNzdzcnYiLCJhIjoiY2tiaW83YXJsMGhjZTJ5bnpoNzZ0cnZlaCJ9.kX7pE6GNnNnStVswkE629g&limit=1';

request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body);
    // console.log(data.current);
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    console.log(longitude);
    console.log(latitude);

});


