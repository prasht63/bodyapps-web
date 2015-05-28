	//Index.js serves as the server
	var express = require('express');
	var app = express();
	var http = require('http').Server(app);
	
	app.use(express.static(__dirname + '/public'));
	
	
	//when it gets index page request
	app.get('/', function(req, res)
	{
	  res.sendFile(__dirname + '/index.html');
	});

	
	var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
	var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally
	http.listen(port, address);
	