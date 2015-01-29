'use strict';

require('angular');

module.exports = angular
    .module('app.phones', [])
    .controller('Phones', require('./phones'))
    .run(require('./phones.route'));