const express     = require('express');
const bodyParser  = require("body-parser");
const server      = express();

server.use(bodyParser.json());

server.set('port', process.env.PORT || 3000);

server.get('/', (request, response) => {
    response.send('Welcome to Dapp1 Exam');
});

server.post('/messageParrot', (request, response) => {
    let resString = "Message is: " + request.body.message + ", Detail is: " + request.body.detail;
        response.send(resString);

});


server.listen(3000, () => { console.log('Node server created at port 3000') });
