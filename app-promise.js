const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const axios = require('axios');
//346e1491510ebc45066902c8e57a928b
const argv = yargs
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
const encodedAddress = encodeURIComponent(argv.Address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBwvYsUAA28EpS6QXy3c_iTUazowdK0L6Y`;


axios.get(geocodeURL)
.then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find address');
    }
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherURL = `https://api.darksky.net/forecast/346e1491510ebc45066902c8e57a928b/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
})
.then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It is currently ${temperature}. It feels like ${apparentTemperature} degrees.`);
})
.catch((error) => {
    if (error.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    }
    else {
        console.log(error.message);
    }
})