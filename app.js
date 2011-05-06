
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Routes

app.get('/', function(req, res){
	var simpleJson = {
		name: 'simple stuff in json',
		requestedAt: new Date(),
		value: 7,
		hash: {one: 1, two: 2, three: 3},
		array: [1, 2, 3]
	}
	res.contentType('application/json');
	res.send(simpleJson);
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(9090);
  console.log("Express server listening on port %d", app.address().port);
}
