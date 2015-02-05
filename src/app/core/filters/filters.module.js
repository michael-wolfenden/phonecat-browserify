'use strict';

require('angular');

module.exports = angular
    .module('app.core.filters', [])
    .filter('checkmark', require('./checkmark'));