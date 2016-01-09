/**
 * Created by abrooksnagel on 1/8/16.
 */
var express = require('express');
//var path = require('path');
var router = express.Router();
var republicans = require('../republicans');


router.get('/', function(request, response) {
    console.log("route to republicans");
    response.send(republicans);
});

module.exports = router;


