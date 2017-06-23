(function () {
    'use strict';
    // console.log('hello world');
    angular
        .module('app')
        .controller('jokeController', jokeController)

    jokeController.$inject = ['$http'];

    function jokeController($http) {
        var vm = this;

        $http
            .get('http://quotes.rest/qod.json?category=inspire'+ 'quote')
            .then(function(response){
                
                vm.joke = response.data;

        // vm.term = quote.quote;
        // console.log(vm.quote),(vm.quote);

        // getJoke();
        
        // getInspiration();

        // function getJoke() {
        //     jokeFactory
        //         .getData()
        //         .then(function (joke) {
        //             vm.joke = joke;
        //             console.log(vm.joke);
        //         })
        // }

        // function getJoke() {
        //     jokeFactory
        //         .getData()
        //         .then(function (content) {
            
        //             vm.content = content;
        //             console.log(vm.content);
        //         });
        // }

            })
    }
})();