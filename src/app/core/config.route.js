'use strict';

module.exports =
/* @ngInject */
function configure($routeProvider, routehelperConfigProvider) {
    routehelperConfigProvider.config.$routeProvider = $routeProvider;
    routehelperConfigProvider.config.defaultRoute = '/phones';
};