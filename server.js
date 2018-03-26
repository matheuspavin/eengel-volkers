const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const clientsRoute = require('./server/routes/clientsRoute')

app.use(bodyParser.json({limit: '50mb'}));
app.use('/client', express.static('client/'));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
	next();
});

app.get("/", function (req, res) {
    res.redirect("/client");
});

app.use('/clients', clientsRoute);

const errorHandler = function (err, req, res, next) {
	console.error('Error:', err);
	res.status(500).send({ message: "server error" });
};

app.options('*', function (req, res, next) {
    res.end();
});

app.use(errorHandler);
app.listen(3500);

console.log('API started on: ' + 3500);
