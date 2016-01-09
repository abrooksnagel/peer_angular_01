/**
 * Created by abrooksnagel on 1/8/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response) {
    console.log("route to index");
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});



module.exports = router;