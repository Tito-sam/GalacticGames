var express = require('express');
var favicon = require('serve-favicon')
var path = require('path')



var indexRouter = require('./routes/index.routes');
var usersRouter = require('./routes/users.routes');
var gamesRouter = require('./routes/games.routes');
var carRouter = require('./routes/car.routes');
var copiardata = require('./db/copy_data.js')

// copiardata.copiarDatos();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/Resource', '/img/logo.png')))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.use('/', indexRouter);
app.use(usersRouter);
app.use(gamesRouter);
app.use(carRouter);


app.use(function( req, res, next) {
  res.status(500).render('error',{message: 'La direccion de enlace esta mal o no fue encontrada.'});
});



module.exports = app;
