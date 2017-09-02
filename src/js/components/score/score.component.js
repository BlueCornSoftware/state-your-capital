(function() {

'use strict';
angular.module('app')
        .component('score', {
            controller: ScoreComponentController,
            controllerAs: 'vm',
            templateUrl: './templates/components/score/score.component.html'
        });

ScoreComponentController.$inject = [];

function ScoreComponentController() {
    var vm = this;
    vm.count = 0;
}

})();
