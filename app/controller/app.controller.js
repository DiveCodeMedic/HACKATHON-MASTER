(function () {
    'use strict';
    console.log('hello world');
    angular
        .module('app')
        .controller('jokeController', jokeController)

    jokeController.$inject = ['$http'];

    function jokeController($http) {
        var vm = this;

        $http
            .get('http://api.yomomma.info/')
            .then(function(response){
                
                vm.joke = response.data;

        // vm.data = data.data;
        // console.log(vm.quote),(vm.quote);

        // getJoke();
        
        // getInspiration();

        function getJoke() {
            jokeFactory
                .getData()
                .then(function (joke) {
                    vm.joke = joke;
                    console.log(vm.joke);
                })
        }

        function getInspiration() {
            jokeFactory
                .getData()
                .then(function (content) {
            
                    vm.content = content;
                    console.log(vm.content);
                });
        }

            })
    }
})();