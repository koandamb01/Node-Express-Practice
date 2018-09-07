const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

// ********** START SETTING UP MY APP ********** //
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extends: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Setup my session
app.use(session({
    secret: '2pacShakur',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
// *************** FINISHED APP SETTING UP *************** //



app.get('/', function (req, res) {
    // check if session.answer exist
    if (!req.session.guess_number) {
        // create a random number and store at session
        req.session.guess_number = Math.floor(Math.random() * 100) + 1;
        req.session.answer = "no_answer";
        req.session.hint = "";
        req.session.tries = 0;
    }

    // put all data in an object
    data = {
        answer: req.session.answer,
        hint: req.session.hint,
        tries: req.session.tries,
    }
    res.render('index', data);
});


// Route to check the user guess number
app.post('/check', function (req, res) {
    // check user answer
    if (req.body.user_number == req.session.guess_number) {
        req.session.answer = 'right';
        req.session.hint = req.body.user_number + " was the number!";
        req.session.hint = req.body.user_number + " was the number!";
    } else {
        req.session.answer = 'wrong';
        req.session.tries++;

        // check if the user number is too high
        if (req.body.user_number > req.session.guess_number) {
            req.session.hint = 'Too high!';
        } else {
            req.session.hint = 'Too low!';
        }
    }

    // redirect back the root route
    res.redirect('/');
});


// Route to check the user guess number
app.get('/replay', function (req, res) {
    req.session.destroy();
    // redirect back the root route
    res.redirect('/');
});

// ************* START SERVER AND LISTEN TO PORT *********** //
app.listen(port, function () {
    console.log("Server is running on port " + port);
});