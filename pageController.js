(function () {

    angular
        .module("pageControllerModule", [])
        .controller("PageController", controller);

    function controller() {
        var ctrl = this;

        ctrl.lastSelectedMonth = "";
        ctrl.multiMode = true;
        ctrl.selectedMonths = [];
        ctrl.setLastSelectedMonth = setLastSelectedMonth;

        function setLastSelectedMonth(month) {
            ctrl.lastSelectedMonth = month;
        }
    }
    
})();