require('./main.css');
module.exports = angular.module('app.main', [])
    .controller('MainController', function($scope) {
        $scope.title = "主页";
    });
