const request = require("request");
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Bogotá', (error, data) => {
    console.log("Error:", error)
    console.log("Data:", data)
});

forecast(40.714, -74.006, (error, data) => {
    console.log("Error:", error)
    console.log("Data:", data)
});

