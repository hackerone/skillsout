'use strict'

angular.module('skillsoutApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('deep-orange')
  .accentPalette('lime');
});