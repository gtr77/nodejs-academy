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

// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3RyNzdzcnYiLCJhIjoiY2tiaW83YXJsMGhjZTJ5bnpoNzZ0cnZlaCJ9.kX7pE6GNnNnStVswkE629g&limit=1';
// // const url = 'http://api.weafrtherstack.com/current?access_key=22908e476b3aed230dfc802bb0be595f&query=37.8267,-122-4233&units=m';
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.');
//     } else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//         console.log(latitude, longitude);
//     }
//
// });

const request = require("request");
const geocode = require('./utils/geocode')

geocode('Bogotá', (error, data) => {
    console.log("Error:", error)
    console.log("Data:", data)
});

