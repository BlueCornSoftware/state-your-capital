(function() {

'use strict';
angular.module('app')
    .factory('TestService', TestService);

TestService.$inject = ['$http'];

function TestService($http) {

    return {
        startTimer: startTimer
    };

    function startTimer() {
        console.log('THE TIMER IS STARTING!');
    }

}

})();
