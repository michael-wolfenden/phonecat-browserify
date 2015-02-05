'use strict';

require('../../app.module');
require('angular-mocks');

describe('dataContext', function () {
    var dataContext;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_dataContext_) {
        dataContext = _dataContext_;
    }));

    //////////////////////////////////////////////////////////////////////////////

    describe('the dataContext service', function () {

        it('should be defined', function () {
            expect(dataContext).to.not.be.undefined();
        });

    });
});