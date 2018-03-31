// const request = require('request');
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const argv = yargs
// //346e1491510ebc45066902c8e57a928b
// .options({
//     a: {
//         demand: true,
//         alias: 'Address',
//         describe: 'Address to fetch weather for',
//         string: true
//     }
// })
// .help()
// .alias('help', 'h')
// .argv;

// geocode.geocodeAddress(argv.Address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     }
//     else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/346e1491510ebc45066902c8e57a928b/poop,-73.6737404',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Forecast.io servers');
    }
    else if (response.statusCode === 400) {
        console.log('Unable to fetch weather');
    }
    else if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    }
    else {
        console.log('Unable to fetch weather');
    }
    
});
