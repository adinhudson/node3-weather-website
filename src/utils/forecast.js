const axios = require('axios')

const forecast = (lat, lon, callback) => {
    axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&cnt=10&appid=ee12a56592ea74f57feb402505501ea4&units=metric',
        responseType: 'json'
    })
        .then(({data}) => {
            callback(undefined, 'Temprature now: ' +  data.current.temp)
        })
        .catch((error) => {
            if (error) {
                callback('Unable to connect', undefined)
            } else if (data.error) {
                callback('Please enter a valid location', undefined)
            }
        });
}

module.exports = forecast