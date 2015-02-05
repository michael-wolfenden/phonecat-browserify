'use strict';

require('angular');
require('angular-resource');

module.exports = angular
    .module('app.core.services', [
        'ngResource'
    ])
    .factory('dataContext', require('./dataContext'));