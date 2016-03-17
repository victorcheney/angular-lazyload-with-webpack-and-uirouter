require('./main.css');

module.exports = angular.module('app.main', [])
    .controller('MainController', function($scope) {
        $("span.pie").peity("pie", { fill: ["#1ab394", "#d7d7d7", "#ffffff"] });
        $scope.title = "主页";
    });
