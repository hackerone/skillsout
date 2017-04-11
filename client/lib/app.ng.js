
angular.module('skillsoutApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'angularUtils.directives.dirPagination',
  'accounts.ui'
]);
// function config(stripeProvider){
// 	stripeProvider.setPublishableKey('pk_test_7YYV9NvGFY7njbHsZtbjkPC6');
// }

onReady = function() {
  angular.bootstrap(document, ['skillsoutApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}