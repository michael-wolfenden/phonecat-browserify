'use strict';

require('angular');

module.exports = angular
    .module('app.phone', [])
    .controller('Phone', require('./phone'))
    .filter('checkmark', require('./../core/filters/checkmark'))
    .run(require('./phone.route'));