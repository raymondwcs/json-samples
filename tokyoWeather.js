const http = require('http');
const APIKEY='';       //**your API key***
const options = {
    host: 'api.openweathermap.org',
    port: 80,
    path: '/data/2.5/weather?q=Tokyo,jp&units=metric&APPID=' + APIKEY,
    method: 'GET'
};

const req = http.request(options, (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        var jsonObj = JSON.parse(chunk); // convert to JSON
        console.log(chunk);
		  console.log(`Tokyo is located at [${jsonObj.coord.lon},${jsonObj.coord.lat}]`);
    });
});

req.on('error', (error) => {
    console.log(`Problem with request: ${error.message}`);
});

req.end();

