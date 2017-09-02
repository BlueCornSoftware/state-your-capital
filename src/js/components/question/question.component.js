(function() {

    'use strict';
    angular.module('app')
            .component('question', {
                controller: QuestionComponentController,
                controllerAs: 'vm',
                templateUrl: './templates/components/question/question.component.html'
            });

    QuestionComponentController.$inject = [];

    function QuestionComponentController() {
        var vm = this;
        vm.question = 'What is the capital of Nebraska?';
    }
})();