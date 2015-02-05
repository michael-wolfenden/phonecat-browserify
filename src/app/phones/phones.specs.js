'use strict';

require('../app.module');
require('angular-mocks');

describe('Phones', function () {
    var $httpBackend, $rootScope, $controller, scope;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$httpBackend_, _$rootScope_, _$controller_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        scope = $rootScope.$new();
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    //////////////////////////////////////////////////////////////////////////////

    describe('the Phones controller', function () {
        var stubPhones = [{name: 'Nexus S'}, {name: 'Motorola DROID'}];

        beforeEach(function () {
            $httpBackend.expectGET('phones/phones.json').respond(stubPhones);

            $controller('Phones as vm', {
                $scope: scope
            });

            $httpBackend.flush();
        });

        it('should create "phones" model with 2 phones fetched from xhr', function () {
            expect(scope.vm.phones).to.resourceEql(stubPhones);
        });

        it('should set the default value of orderProp model', function () {
            expect(scope.vm.orderProp).to.equal('age');
        });
    });
});