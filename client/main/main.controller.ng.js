'use strict'
angular.module('skillsoutApp').controller('MainCtrl', function($scope, teachersService, $meteor, $reactive) {
    var vm = this;
    $reactive(vm).attach($scope);
    
    vm.page = 1;
    vm.perPage = 3;
    vm.sort = {
        name: 2
    };
    vm.orderProperty = '1';

    //methods
    vm.initialize = initialize;
    vm.searchTeachers = serachTeachers;
    function initialize(){
        var promise = teachersService.getLoadTeachers();
        promise.then(function(data){
            console.log(data);
            vm.teachersProfile = data
        })
    }
    function serachTeachers() {
        var promise = teachersService.getTeachers(vm.search);
        promise.then(function(data){
            console.log(data);
            vm.teachersProfile = data
        })
    };
    initialize();
});



