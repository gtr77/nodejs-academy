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
console.log("Starting");

setTimeout(() => {
    console.log("2 Timer")
},2000)

setTimeout(() => {
    console.log("0 Second Timer")
},0)

console.log("Stopping");

/* KEY CONCEPTS
CALL STACK -> THE PLACE THAT STARTS WITH MAIN() AND CALL EVERY SINGLE LINE OF THE PROGRAM
    -> remove all logs and main from the callStack
    -> Program Finishes
    -> console.log("Stopping");
    -> console.log("Starting");
    -> main()
NODE API'S -> ASYNCRONOUS CODE RUNNING BEHIND THE SCENES LIKE THE SETTIMEOUT FUNCTION
    -> setTimeout 0 Seconds
    -> setTimeout 2 Seconds
    -> waiting to the callStack to be clean
    -> add to the list
CALLBACK QUEUE, -> THIS IS THE EVENT LOOP THAT ADD THE NODE OR API REQUEST TO BE READY TO EXECUTE
    -> setTimeout 0 Seconds
    -> setTimeout 2 Seconds
    -> Clean Call Stack
 */


