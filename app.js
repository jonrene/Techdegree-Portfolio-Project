// imports express framework
const express = require('express');

// creates express application and sets its view engine to pug. 
const app = express();
app.set('view engine', 'pug');

// static route to serve static files in public folder. 
app.use('/static', express.static('public'));

// imports routes to be used for project
const homeRoute = require('./routes/index.js');

// Adds middleware to application for index/home route.
app.use(homeRoute);

// error handler
app.use((req, res, next) => {
    const err = new Error('Sorry, the requested resource was not found.');
    err.status = 404;
    console.log(err.message);
    console.log(err.status);
    next(err);
  });
  
// global error handler
app.use((err, req, res, next) => {
  if(err.status == 404){
    const errMessage = "Sorry, the requested resource was not found.";
    const errStatus = 404;
    res.render("error.pug", {errMessage: errMessage, errStatus: errStatus});
  }else{ 
    res.render("error.pug", {errMessage: "OOPS! Something went wrong.", errStatus: 500})
  }
});

// starts application to listen on port 3000
app.listen(3000);
