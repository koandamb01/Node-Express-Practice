// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require('express');

// invoke express and store the result in the variable app
var app = express();



// tell express to use static file
app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/templates"));
app.use(express.static(__dirname + "/static/css"));


// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jadecopy
app.set('view engine', 'ejs');


// use app's get method and pass it the base route '/' and a callback
app.get('/', function (req, res) {
    // just for fun, take a look at the request and response objects

    // use the response object's .send() method to respond with an h1
    // res.send("<h1>Hey Med this your first Express</h1>");
});


app.get("/users", function (req, res) {
    // hard-coded user data
    var users_array = [
        { name: "Michael", email: "michael@codingdojo.com" },
        { name: "Jay", email: "jay@codingdojo.com" },
        { name: "Brendan", email: "brendan@codingdojo.com" },
        { name: "Andrew", email: "andrew@codingdojo.com" }
    ];
    res.render('users', { users: users_array });
})






//  Run server and listen to port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})