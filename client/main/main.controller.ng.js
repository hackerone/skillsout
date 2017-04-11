'use strict'
angular.module('skillsoutApp').controller('MainCtrl', function($scope, teachersService, $meteor, $reactive) {
    var vm = this;
    $reactive(vm).attach($scope);
    vm.page = 1;
    vm.perPage = 1;
    vm.loading = false;
    vm.searched = false;
    //methods
    vm.initialize = initialize;
    vm.searchTeachers = serachTeachers;
    vm.loadMore = data;

    function initialize() {
        var promise = teachersService.getLoadTeachers();
        promise.then(function(data) {
            console.log(data);
            vm.teachersProfile = data
        })
    }



    function data() {
        console.log('hi');
        vm.loading = true;
        vm.page++;
        
        var promise = teachersService.getTeachers(vm.search, {
            offset: (vm.page - 1) * vm.perPage,
            limit: vm.perPage
        });
        promise.then(function(data) {
            vm.teachersProfile = data
            vm.loading = false;
        });
    }

    function serachTeachers() {
        var promise = teachersService.getTeachers(vm.search,{
            offset: (vm.page - 1) * vm.perPage,
            limit: vm.perPage
        });
        promise.then(function(data) {
            vm.teachersProfile = data
            if(_.size(data) >= vm.perPage){
                vm.searched = true;
            }
        });
    };
    initialize();
});