const request = require('postman-request');

const forecast = (latitude, longitude, cb) => {
    const weatherstackKey = 'a02cc1724c877b2149999d2cad2e054a';
    const weatherstackURL = `http://api.weatherstack.com/current?access_key=${weatherstackKey}&query=${latitude},${longitude}&units=m`;

    request({ url: weatherstackURL, json: true }, (error, response, body) => {
        if (error) {
            cb('Unable to connect to weather services!');
        } else if (body.error) {
            cb(body.error.info);
        } else {
            const data = `The current temperature is ${body.current.temperature} degrees Celsius`;

            cb(null, data);
        }
    });
};

module.exports = forecast;
