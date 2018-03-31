const request = require('request');

geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBwvYsUAA28EpS6QXy3c_iTUazowdK0L6Y`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Error connecting to Google servers');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find address');
        }
        else if (body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng,
            });
        }
        
    })
}

module.exports = {
    geocodeAddress
}