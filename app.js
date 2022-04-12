// imports express framework
const express = require('express');

// creates express application and sets its view engine to pug. 
const app = express();
app.set('view engine', 'pug');

// static route to serve static files in public folder. 
app.use('/static', express.static('public'));

// imports routes to be used for project
const mainRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');


app.use(mainRoute);
app.use('/about', aboutRoute);

app.listen(3000);
