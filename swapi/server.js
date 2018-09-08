const express = require('express');
const path = require('path');
const axios = require('axios');
const session = require('express-session');

const app = express();
const port = 8000;
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



app.get('/', function (req, res) {
    res.render('index');
});

// route for /people request
app.get('/people', function (req, res) {

    req.session.page = 1;

    axios.get('https://swapi.co/api/people/?page=1&count=10').then(APiResponse => {
        // send json data back to the client
        res.json(APiResponse.data.results);
    }).catch(error => {
        console.log(error);
        res.json(error);
    });
});

// route for /people previous / next
app.get('/people/:value', function (req, res) {

    var value = parseInt(req.params.value);
    if (value == 1 && req.session.page != 9) {
        req.session.page++;
    }
    else if (value == -1 && req.session.page != 1) {
        req.session.page--;
    }

    console.log(req.session.page);
    axios.get('https://swapi.co/api/people/?page=' + req.session.page + '&count=10').then(APiResponse => {
        // send json data back to the client
        res.json(APiResponse.data.results);
    }).catch(error => {
        console.log(error);
        res.json(error);
    });
});


// route for /planets request
app.get('/planets', function (req, res) {

    req.session.page = 1;

    axios.get('https://swapi.co/api/planets/?page=1&count=10').then(APiResponse => {
        // send json data back to the client
        res.json(APiResponse.data.results);
    }).catch(error => {
        console.log(error);
        res.json(error);
    });
});


// route for /people previous / next
app.get('/planets/:value', function (req, res) {

    var value = parseInt(req.params.value);
    var url;
    if (value == 1 && req.session.page != 9) {
        req.session.page++;
        url = 'https://swapi.co/api/planets/?page=' + req.session.page + '&count=10';
    }
    else if (value == -1 && req.session.page != 1) {
        req.session.page--;
        url = 'https://swapi.co/api/planets/?page=' + req.session.page + '&count=10';
    } else {
        url = 'https://swapi.co/api/planets/?count=61';
        req.session.page = 1;
    }

    console.log(req.session.page);
    axios.get(url).then(APiResponse => {
        // send json data back to the client
        res.json(APiResponse.data.results);
    }).catch(error => {
        console.log(error);
        res.json(error);
    });
});

// ********* START APP SERVER IN PORT 8000 ************ //
app.listen(port, function () {
    console.log('Server is running in port ' + port);
});