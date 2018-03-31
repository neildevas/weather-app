const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
//346e1491510ebc45066902c8e57a928b
.options({
    a: {
        demand: true,
        alias: 'Address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.Address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        weather.getWeather({
            lat: results.lat, 
            lng: results.lng 
        }, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            }
            else {
                console.log(`The actual temperature is ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
            }
        });
    }
});


//pass in latitude and longitude
//provide callback function = (errormessage, result) => {
    //...do something
    //}
// coords = {
//     lat: 40.8376532,
//     lng: -73.6737404
// }

