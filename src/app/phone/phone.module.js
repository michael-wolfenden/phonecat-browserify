'use strict';

require('angular');

module.exports = angular
    .module('app.phone', [])
    .controller('Phone', require('./phone'))
    .run(require('./phone.route'));