const express = require('express');

// ********** START SETTING UP MY APP ********** //
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // tell our app to use staic files
app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/templates"));
app.use(express.static(__dirname + "/static/css"));
app.use(express.static(__dirname + "/static/images"));
app.set('views', __dirname + '/views'); // tell our express app to use views
app.set('view engine', 'ejs'); // Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
// *************** FINISHED APP SETTING UP *************** //


// app.get('/', function (req, res) { });

// route for cars
app.get('/cars', function (req, res) {
    res.render('cars');
});

// route for track and field
app.get('/cats', function (req, res) {
    res.render('cats');
});
// route for forms
app.get('/cars/new', function (req, res) {
    res.render('form');
});


const cats = require('./cats');
// routes for cats details
app.get('/cat1', function (req, res) {
    var cat = cats[0];
    res.render('details', { 'cat': cat });
});

app.get('/cat2', function (req, res) {
    var cat = cats[1];
    res.render('details', { 'cat': cat });
});

app.get('/cat3', function (req, res) {
    var cat = cats[2];
    res.render('details', { 'cat': cat });
});


// process the form from the post request
app.post('/add_car', function (req, res) {
    console.log("My POST DATA: \n\n", req.body);
    res.redirect('/cars/new');
});


app.listen(8000, function () {
    console.log("Server is running in port 8000");
});