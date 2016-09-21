var http = require('http');

var options = {
    host: 'api.openweathermap.org',
    port: 80,
    path: '/data/2.5/weather?q=Tokyo,jp&units=metric',
    method: 'GET'
};

var APIKEY="";       //**your API key***
var req = http.request(options, function(res) {
    res.setEncoding('utf8');

    res.on('data', function (chunk) {
        var jsonObj = JSON.parse(chunk);
        console.log("Current Temp. : " + jsonObj.main.temp);
        console.log("Max Temp : "      + jsonObj.main.temp_max);
        console.log("Min Temp : "      + jsonObj.main.temp_min);
    });
});

req.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
});

req.end();

