const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBwvYsUAA28EpS6QXy3c_iTUazowdK0L6Y`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers');
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find address');
            }
            else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng,
                })
            }
        })
    })
};

geocodeAddress('84 Beacon hill road').then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
    console.log("Promise satisfied");
})
.catch((errorMessage) => {
    console.log(errorMessage);
})

