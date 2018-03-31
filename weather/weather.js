const request = require('request');

var getWeather = (coords, callback) => {
    request({
        url: `https://api.darksky.net/forecast/346e1491510ebc45066902c8e57a928b/${coords.lat},${coords.lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
           // console.log('Unable to connect to Forecast.io servers');
           callback('Unable to connect to Forecast.io servers');
        }
        else if (!error && response.statusCode === 200) {
            //console.log(body.currently.temperature);
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else {
            //console.log('Unable to fetch weather');
            callback('Unable to connect to Forecast.io servers');
        }
        
    });
}

module.exports.getWeather = getWeather;
