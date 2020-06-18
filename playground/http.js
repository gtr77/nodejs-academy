const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=22908e476b3aed230dfc802bb0be595f&query=New%20York'

const request = http.request(url,(response) => {
    let data = ''

    response.on('data', (chunk) => {
        console.log("Chucn",chunk.toString())
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) => {
    console.log('An error', error)
})
request.end();
