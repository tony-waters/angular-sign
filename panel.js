(function () {

    angular.module('panelModule', [])
            .directive('panel', directive);

    function directive() {
        return {
            transclude: true,
            templateUrl: 'panel.html',
            controller: function () {},
            controllerAs: 'ctrl',
            scope: {
                heading: '@'
            },
            bindToController: true,
            link: link
        };
    }

    function link(scope, iElement, iAttr, ctrl, transcludeFn) {
        // find element with ng-transclude attribute
        var target = iElement.find('[ng-transclude]')
        // pass 'clone attach function' to transclude
        transcludeFn(function (clone) {
            // replace target content with clone
            target.empty();
            target.append(clone);
        })
    }

})();
