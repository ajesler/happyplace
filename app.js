
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/app_routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// setup routes
app.get('/', routes.findex);
app.get('/admin', routes.fadmin);
app.get('/add', routes.fadd);
app.post('/add', routes.fadd_post);
app.get('/edit', routes.fedit);
app.post('/edit', routes.fedit_post);
app.post('/delete', routes.fdelete);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
