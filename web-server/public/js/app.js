console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(`Error Message: ${data.error}`);
            }
            console.log(`Show location: ${data.location}`);
            console.log(`Show forecast: ${data.forecast}`);
        })
    })

});