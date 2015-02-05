'use strict';

require('../../app.module');
require('angular-mocks');

describe('checkmark', function () {
    var checkmarkFilter;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_checkmarkFilter_) {
        checkmarkFilter = _checkmarkFilter_;
    }));

    //////////////////////////////////////////////////////////////////////////////

    describe("the checkmark filter", function () {

        it('should convert true values to unicode checkmark', function () {
            expect(checkmarkFilter(true)).to.equal('\u2713');
        });

        it('should convert false values to unicode cross', inject(function () {
            expect(checkmarkFilter(false)).to.equal('\u2718');
        }));
    });
});