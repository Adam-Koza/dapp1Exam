const express = require('express');
const bodyParser = require("body-parser");
const server = express();

server.use(bodyParser.json());

server.set('port', process.env.PORT || 8080);

server.post('/messageParrot', (request, response) => {
    let resString = "Message is: " + request.body.message + ", Detail is: " + request.body.detail;
    response.send(resString);

});


server.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
});
