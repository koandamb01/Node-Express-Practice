const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// ************* START SETTING UP APP *************** //
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static'))); // static content
app.set('views', path.join(__dirname, './views')); // setting up ejs and our views folder
app.set('view engine', 'ejs');
// *************** FINISHED APP SETTING UP *************** //


// root ROUTE
app.get('/', function (req, res) {
    res.render('index');
});

// @results ROUTE
app.post('/result', function (req, res) {
    // create an object to store the form data
    var data = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment,
    }
    res.render('result', data);
});



// *************** START APP SERVER AND LISTEN TO PORT 8000 *************** //
app.listen(port, function () {
    console.log("Server is running on port " + port);
});