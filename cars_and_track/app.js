// get the http module:
var http = require("http");
// fs module allows us to read and write content for responses!!
var fs = require("fs");
// creating a server using http module:
var server = http.createServer(function (request, response) {
  // see what URL the clients are requesting:
  console.log("client request URL: ", request.url);

  if (request.url === "/") {
    fs.readFile("views/index.html", "utf8", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  // All request for Track and Field
  else if (request.url === "/track") {
    fs.readFile("views/track.html", "utf8", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  // All request for cars
  else if (request.url === "/cars") {
    fs.readFile("views/cars.html", "utf8", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  // All request for cars
  else if (request.url === "/cars/new") {
    fs.readFile("views/cars_form.html", "utf8", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  else if (request.url === "/cars/css/style.css") {
    console.log("Im here!")
    fs.readFile("css/style.css", "utf8", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "text/css" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }
  else if (request.url === "/css/style.css") {
    fs.readFile("css/style.css", "utf8", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "text/css" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  // Request for all pictures
  else if (request.url === "/images/image1.jpg") {
    fs.readFile("images/image1.jpg", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "image/jpg" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  else if (request.url === "/images/image2.jpg") {
    fs.readFile("images/image2.jpg", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "image/jpg" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  else if (request.url === "/images/image3.jpg") {
    fs.readFile("images/image3.jpg", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "image/jpg" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }
  else if (request.url === "/images/car.jpg") {
    fs.readFile("images/car.jpg", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "image/jpg" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  else if (request.url === "/images/tesla.jpg") {
    fs.readFile("images/tesla.jpg", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "image/jpg" }); // send info about response
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }

  // request didn't match anything:
  else {
    response.writeHead(404);
    response.end("File not found!!!");
  }

});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
