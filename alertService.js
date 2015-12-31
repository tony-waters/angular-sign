(function () {

    angular
        .module('alertServiceModule', [])
        .service("AlertService", alertService);

    function alertService() {

        var service = {
            addAlert: addAlert,
            alerts: [],
            filteredAlerts: [],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            removeAllAlerts: removeAllAlerts,
            updateSelectedMonths: updateSelectedMonths
        };

        init();

        return service;
        
        // functions

        function init() {
            service.addAlert({month: 'Jan', severity: 'info', message: 'Alert #1 for Jan with severity info'});
            service.addAlert({month: 'Jan', severity: 'warning', message: 'Alert #2 for Jan with severity warning'});
            service.addAlert({month: 'Jan', severity: 'danger', message: 'Alert #3 for Jan with severity danger'});
            service.addAlert({month: 'Feb', severity: 'info', message: 'Alert #1 for Feb with severity info'});
        }

        function addAlert(alert) {
            service.alerts.push(alert);
        }

        function removeAllAlerts() {
            service.alerts = [];
        }

        function updateSelectedMonths(months) {
            var i, currentAlert;
            service.filteredAlerts = [];
            for (i = 0; i < service.alerts.length; i++) {
                currentAlert = service.alerts[i];
                if (months.indexOf(currentAlert.month) > -1) {
                    service.filteredAlerts.push(currentAlert);
                }
            }
        }
    }

})();