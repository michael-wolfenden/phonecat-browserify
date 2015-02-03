'use strict';

require('../app.module');
require('angular-mocks');

describe('Checkmark', function () {

    beforeEach(angular.mock.module('app'));

    it('should convert boolean values to unicode checkmark or cross',
        inject(function (checkmarkFilter) {
            expect(checkmarkFilter(true)).to.equal('\u2713');
            expect(checkmarkFilter(false)).to.equal('\u2718');
        }));
});