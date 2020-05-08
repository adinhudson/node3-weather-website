const axios = require('axios')

const geocode = (address, callback) => {
    axios({
      method: 'get',
      url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYWRpbmh1ZHNvbiIsImEiOiJjazlncXhsY2YwcXFsM3RvNGZvd3EyNmd1In0.qZDfqqk75Fq1vwT_gYA5_Q&limit=1',
      responseType: 'json'
    })
      .then(({data}) => {
        callback(undefined, {
          latitude: data.features[0].center[1],
          longtitude: data.features[0].center[0],
          location: data.features[0].place_name
        })
      })
      .catch((error) => {
        if (error){
          callback('Unable to connect to location service!', undefined)
        } else if (data.features.length === 0) {
          callback('Unable to find location', undefined)
        }
      });
  }

  module.exports = geocode