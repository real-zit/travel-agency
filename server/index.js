const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser')

// import the db
const db = require('./config/database');

// testing connection
// db.authenticate()
//     .then(() => {
//         console.log("Db Connected")
//     })
//     .catch(err => console.log(err));


// import the config
const configs = require('./config');

// create a new server
const app = express();

// filter the current env 
const config = configs[app.get('env')];

// use pug 
app.set('view engine', 'pug');

// add views folder
app.set('views', path.join(__dirname, '/views'));

// load static
app.use(express.static('public'));

// get the current year
app.use((req,res,next) => {
    const date = new Date();
    res.locals.currentYear = date.getFullYear();
    
    // take the current page
    res.locals.currentPage = req.path;
    return next();
});

// pass the sitename
app.locals.sitetitle = config.sitename; 

// enable body-parser
app.use(bodyParser.urlencoded({extended:true}));


// listen to homepage
app.use('/', routes());


// run the application
app.listen(3000);