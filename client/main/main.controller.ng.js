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
    vm.loadMore = loadMore;
    vm.noResult = false;
    function initialize() {
        var promise = teachersService.getLoadTeachers();
        promise.then(function(data) {
            vm.teachersProfile = data
        })
    }

    function loadMore() {
        vm.loading = true;
        vm.page++;
        
        var promise = teachersService.getTeachers(vm.search, {
            offset: (vm.page - 1) * vm.perPage,
            limit: vm.perPage
        });
        promise.then(function(data) {
            console.log(data);
            if(_.size(data) === 0){
                vm.searched = false;
                vm.noResult = true;
            }
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
            if(_.size(data) === 0){
                vm.noResult = true;
            }
            vm.teachersProfile = data;
            if(_.size(data) >= vm.perPage){
                vm.searched = true;
            }

        });
    };
    initialize();
});