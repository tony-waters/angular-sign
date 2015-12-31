describe('Given an AlertList', function () {
    var element, scope, controller, service

    beforeEach(module("alertListModule", 'alertServiceModule'))
        
    beforeEach(module('templates'))
    
    describe('when in default mode', function() {

        beforeEach(inject(function ($rootScope, $compile, $controller) {
            scope = $rootScope
            controller = $controller('AlertListController as ctrl', {$scope: scope})
        }))
        
        it('should be properly set up', function() {
            expect(controller).toBeDefined()
        })
        
        
        
    })
})