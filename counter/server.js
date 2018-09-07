const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

/// *************** START APP SETTING UP *************** //
const app = express(); // create my app with express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static'))); // static content
app.set('views', path.join(__dirname, './views')); // setting up ejs and our views folder
app.set('view engine', 'ejs');

// Setup my session
app.use(session({
    secret: '2pacShakur',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
// *************** FINISHED APP SETTING UP *************** //

// Home route
app.get('/', function (req, res) {
    if (!req.session.counter) {
        req.session.counter = 1;
    } else {
        req.session.counter++;
    }
    res.render('index', { 'count': req.session.counter });
});

app.get('/add_two', function (req, res) {
    req.session.counter++;
    res.redirect('/');
});

app.get('/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});











// run server and listen on port 8000
app.listen(8000, function () {
    console.log("Server is running in port 8000");
});