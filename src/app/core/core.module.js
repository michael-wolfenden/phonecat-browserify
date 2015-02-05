'use strict';

require('angular');

module.exports = angular
    .module('app.core', [
        require('../infastructure/router/router.module').name,

        require('./filters/filters.module').name,
        require('./services/services.module').name,
        require('./ui/ui.module').name
    ])
    .config(require('./config.route.js'));