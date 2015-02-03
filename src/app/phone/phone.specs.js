'use strict';

require('../app.module');
require('angular-mocks');

describe('Phone', function () {
    var scope, ctrl, $httpBackend;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/xyz.json').respond({name: 'phone xyz'});

        $routeParams.phoneId = 'xyz';
        scope = $rootScope.$new();
        ctrl = $controller('Phone as vm', {$scope: scope});
    }));

    it('should fetch phone detail', function () {
        expect(scope.vm.phone).to.be.undefined();
        $httpBackend.flush();

        expect(scope.vm.phone).to.deep.equal({name: 'phone xyz'});
    });
});