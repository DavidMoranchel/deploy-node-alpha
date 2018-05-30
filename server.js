var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Book = require('./api/models/bookModel'),
  Author = require('./api/models/authorModel'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session);

  // mongoose instance connection url connection
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/firstApi');


  app.use(session({
    secret: 'Secreto',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      url: 'mongodb://localhost/firstApi',
      autoReconnect: true
    })
  }));

  app.get('/', (req,res) => {
    req.session.count = req.session.count ? req.session.count + 1 : 1;
    res.send('Se visito este sitio '+ req.session.count +' veces');
  });



  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routesBook = require('./api/routes/bookRoutes'); //importing route
  var routesAuthor = require('./api/routes/authorRoutes'); //importing route

  routesBook(app); //register the route
  routesAuthor(app);

  app.listen(port);
  console.log('RESTful API server started on: ' + port);
