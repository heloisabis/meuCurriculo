require('marko/node-require');
var markoExpress = require("marko/express");
const express = require('express');

const app = express();
app.use(markoExpress());

app.get('/heloisa_souza', function (req, res) {
        res.marko(require('./templates/curriculo.marko'));
});

app.listen(3000, '0.0.0.0', function () { 
        console.log('Servidor iniciado ...');
});