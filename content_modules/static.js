module.exports = function (request, response) {
    const fs = require('fs');

    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { "Content-Type": "text/html" }); // send info about response
            response.write(contents); //  send response body
            response.end(); // finished!
        });
    } else {


        // remove the the forward slash if there is one

        let str = request.url[request.url.length - 1]; // get the last character of the url
        if (str === '/') {
            url = request.url.slice(0, -1);
        }

        paths = url.split('/'); // split the url from the request




















    }
}   