const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address');
} else {
    geocode(address, (error, { latitude, longitude, placeName } = {}) => {
        if (error) {
            return console.log('geocode error:', error);
        }

        return forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                return console.log('forecast error:', err);
            }
            return console.log(placeName, forecastData);
        });
    });
}
