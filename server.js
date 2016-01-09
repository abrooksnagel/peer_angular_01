var express = require('express');
var index =  require('./route/index');
var democrat_json = require('./route/democrat_json');
var republican_json = require('./route/republican_json');
var app = express();


app.use(express.static('public'));
app.use('/', index);
app.use('/democrat_json', democrat_json);
app.use('/republican_json', republican_json);



app.listen(3000, function() {
    console.log("listening on port 3000");

});