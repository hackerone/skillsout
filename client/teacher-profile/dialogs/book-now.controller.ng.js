'use strict';
angular.module('skillsoutApp')
.controller('DialogController', DialogController)
function DialogController($scope) {
    console.log('hi')
	$scope.paymentForm = false;
}