console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/weather?address=bogota').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            return console.log(`Error Message: ${data.error}`);
        }
        console.log(`Show location: ${data.location}`);
        console.log(`Show forecast: ${data.forecast}`);
    })
})