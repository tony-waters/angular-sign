(function () {
    
    "use strict";

    angular
        .module('monthPickerModule', [])
        .directive("monthPicker", directive)
        .controller("MonthPickerController", controller);

    function directive() {
        return {
            templateUrl: 'monthPicker.html',
            controller: "MonthPickerController",
            controllerAs: 'ctrl',
            scope: {
                multi: '@?',
                selected: '=',
                lastSelected: '&'
            },
            bindToController: true
        };
    }

    function controller() {
        var ctrl = this;

        ctrl.isSelected = isSelected;
        ctrl.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        ctrl.selectMonth = selectMonth;

        function selectMonth(month) {
            if (isMultiMode()) {
                if (isSelected(month)) {
                    // in multi-mode with month already selected
                    // so remove month
                    var index = ctrl.selected.indexOf(month);
                    ctrl.selected.splice(index, 1);
                } else {
                    // in multi-mode with month unselected
                    // so add month
                    ctrl.selected.push(month);
                    ctrl.lastSelected({'month': month});
                }
            } else {
                // in single-select mode
                // so make month the only selected
                ctrl.selected = [month];
                ctrl.lastSelected({'month': month});
            }
        }

        function isMultiMode() {
            return ctrl.multi === 'true';
        }

        function isSelected(month) {
            return ctrl.selected.indexOf(month) > -1;
        }

    }

})();