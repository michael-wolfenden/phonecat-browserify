'use strict';

require('../app.module');
require('angular-mocks');

describe('Phones', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/phones.json').
            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

        scope = $rootScope.$new();
        ctrl = $controller('Phones as vm', {$scope:scope});
    }));

    it('should create "phones" model with 2 phones fetched from xhr', function() {
        expect(scope.vm.phones).to.be.undefined();
        $httpBackend.flush();

        expect(scope.vm.phones).to.deep.equal([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set the default value of orderProp model', function() {
        expect(scope.vm.orderProp).to.equal('age');
    });

});