'use strict';

require('../app.module');
require('angular-mocks');

describe('Phone', function () {
    var $httpBackend, $rootScope, $controller, scope, $routeParams;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$httpBackend_, _$rootScope_, _$routeParams_, _$controller_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $routeParams = _$routeParams_;
        $controller = _$controller_;
        scope = $rootScope.$new();
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    //////////////////////////////////////////////////////////////////////////////

    describe('the Phone controller', function () {
        var stubPhone = {
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
        };

        beforeEach(function () {
            $httpBackend.expectGET('phones/xyz.json').respond(stubPhone);
            $routeParams.phoneId = 'xyz';

            $controller('Phone as vm', {
                $scope: scope
            });

            $httpBackend.flush();
        });

        it('should fetch phone detail', function () {
            expect(scope.vm.phone).to.resourceEql(stubPhone);
        });

        it('should set main image url to the first image', function () {
            expect(scope.vm.mainImageUrl).to.equal('image/url1.png');
        });
    });
});