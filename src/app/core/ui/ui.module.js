'use strict';

require('angular');
require('angular-animate');

module.exports = angular
    .module('app.core.ui', [
        'ngAnimate'
    ])
    .animation('.phone', require('./animations'));