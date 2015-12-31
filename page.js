(function () {
    
    "use strict";

    angular.module('pageModule', [])
            .directive('page', directive);

    function directive() {
        return {
            transclude: true,
            templateUrl: 'page.html',
            scope: {},
            link: link
        };
    }

    function link(scope, iElement, iAttrs, ctrl, transcludeFn) {
        // call transclude with custom clone attch function
        transcludeFn(function (clone, transclusionScope) {
            // loop through nodes in the clone
            angular.forEach(clone, function (cloneEl) {
                // only interested in element nodes with a 'layout' attribute
                if (cloneEl.nodeType === 1 && cloneEl.attributes["layout"]) {
                    var targetId = cloneEl.attributes["layout"].value;
                    var target = iElement.find("#" + targetId);
                    if (target.length) {
                        target.append(cloneEl);
                    } else {
                        cloneEl.remove();
                        throw new Error('Target not found, specify correct layout attribute');
                    }
                } else {
                    cloneEl.remove();
                }
            });
        });
    }

})();