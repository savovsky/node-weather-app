const request = require('postman-request');

const weatherstackURL = 'http://api.weatherstack.com/current?access_key=a02cc1724c877b2149999d2cad2e054a&query=37.8267,-122.4233';

request({ url: weatherstackURL, json: true }, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to weather services!');
    } else if (body.error) {
        console.log('body:', body.error.info);
    } else {
        console.log(`The current temperature is ${body.current.temperature} degrees Celsius`);
    }
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F2b3Zza3kiLCJhIjoiY2tqNXM1b3hvMDZmODJxcnVlNDZ6YXJpciJ9.S7DtL4BuynWnaHd7oDmfYw&limit=1';

request({ url: geocodeURL, json: true }, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to location services!');
    } else if (body.features.length === 0) {
        console.log('Unable to find location. Try another surch.');
    } else {
        const latitude = body.features[0].center[1];
        const longitude = body.features[0].center[0];
        console.log('latitude:', latitude);
        console.log('longitude:', longitude);
    }
});
