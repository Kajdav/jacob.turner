var Express = require('express'),
	App = Express(),
	bodyParser = require('body-parser');

var port = 9021;

App.use(bodyParser.json());

App.use(Express.static(__dirname + '/public'));

App.all('*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});

App.listen(port, function(){
	console.log('Now listening on port ', port)
})