'use strict'

angular.module('skillsoutApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('pink')
  .accentPalette('lime');
});