const request = require('postman-request');

const geoCode = (address, cb) => {
    const mapboxToken = 'pk.eyJ1Ijoic2F2b3Zza3kiLCJhIjoiY2tqNXM1b3hvMDZmODJxcnVlNDZ6YXJpciJ9.S7DtL4BuynWnaHd7oDmfYw';
    const encodedAddress = encodeURIComponent(address);
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${mapboxToken}&limit=1`;

    request({ url: geocodeURL, json: true }, (error, response, body) => {
        if (error) {
            cb('Unable to connect to location services!');
        } else if (body.features.length === 0) {
            cb('Unable to find location. Try another surch.');
        } else {
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const placeName = body.features[0].place_name;
            const data = { latitude, longitude, placeName };

            cb(null, data);
        }
    });
};

module.exports = geoCode;
