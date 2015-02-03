'use strict';

require('../app.module');
require('angular-mocks');

describe('Phone', function () {
    var scope, ctrl, $httpBackend,
        xyzPhoneData = function () {
            return {
                name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
            }
        };

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

        $routeParams.phoneId = 'xyz';
        scope = $rootScope.$new();
        ctrl = $controller('Phone as vm', {$scope: scope});
    }));

    it('should fetch phone detail', function () {
        expect(scope.vm.phone).to.be.undefined();
        $httpBackend.flush();

        expect(scope.vm.phone).to.deep.equal(xyzPhoneData());
    });

    it('should set main image url to first image', function () {
        expect(scope.vm.mainImageUrl).to.be.undefined();
        $httpBackend.flush();

        expect(scope.vm.mainImageUrl).to.equal('image/url1.png');
    });
});