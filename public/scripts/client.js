/**
 * Created by abrooksnagel on 1/8/16.
 */
var app = angular.module('myApp', []);

var completeList = [];

var winner = "";

app.controller('myController', function($scope, $http) {


$scope.getPresidents = function() {
    $http({
        method: 'GET',
        url: '/democrat_json'
    }).then(function(response) {
        console.log(response.data[0].name);
        for (var i = 0; i < response.data.length; i++) {
            completeList.push(response.data[i].name);
        }
        //return functionArray(response);
        //console.log(democrats);
    });

    $http({
        method: 'GET',
        url: '/republican_json'
    }).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            completeList.push(response.data[i].name);

        }
        console.log("inside republican", completeList);

        var x = randomizer();
        winner = completeList.splice(x,1);
        console.log('post slice ',completeList);
        console.log('post slice winner',winner);
        completeList = [];
        console.log(completeList);


    });


}
    $scope.selectWinner = function() {
        $scope.president = winner[0];
    }

});

var randomizer = function() {
    return Math.floor(Math.random() * (1 + completeList.length - 0) - 1);
};

