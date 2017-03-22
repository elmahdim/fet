'use strict';

var express = require('express');
var app     = express();
var port    = 5000;

app
    .use(express.static(__dirname + '/public'))
    .set('views', __dirname + '/src/views')
    .set('view engine', 'jade')
    .get('/', function (req, res) {
        res.render('index.jade');
    })
    .get('/styleguides', function(req, res){
        res.render('styleguide.jade');
    })
    .listen(port, function () {
        console.log('server running on port ' + port);
    });