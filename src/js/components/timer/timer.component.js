(function() {

'use strict';
angular.module('app')
    .component('timer', {
        controller: TimerComponentController,
        controllerAs: 'vm',
        templateUrl: './templates/components/timer/timer.component.html'
    });

TimerComponentController.$inject = ['TestService'];

function TimerComponentController(TestService) {
    var vm = this;
    vm.title = 'TIMER COMPONENT';
    vm.testService = TestService;
}


})();