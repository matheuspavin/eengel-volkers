var express = require('express'),
  app = express(),
	port = process.env.PORT || 3500;

const bodyParser = require('body-parser');

const clientsRoute = require('./server/routes/clientsRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
	next();
});

app.use('/clients', clientsRoute);

const errorHandler = function (err, req, res, next) {
	console.error('Error:', err);
	res.status(500).send({ message: "server error" });
};

app.get('*', function(req, res) {
    res.sendfile('./client/index.html');
});

app.use(errorHandler);
app.listen(port);

console.log('API started on: ' + port);
