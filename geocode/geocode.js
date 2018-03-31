const request = require('request');

geocodeAddress = (address) => {
    const encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBwvYsUAA28EpS6QXy3c_iTUazowdK0L6Y`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Error connecting to Google servers');
        }
        else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find address');
        }
        else if (body.status === 'OK'){
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
        }
        
    })
}

module.exports = {
    geocodeAddress
}