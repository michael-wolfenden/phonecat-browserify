'use strict';

module.exports =
/*@ngInject*/
function routehelper(routehelperConfig) {
    var $routeProvider = routehelperConfig.config.$routeProvider;

    var service = {
        configureRoutes: configureRoutes
    };

    return service;
    ///////////////

    function configureRoutes(routes) {
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.config);
        });
        $routeProvider.otherwise({
            redirectTo: routehelperConfig.config.defaultRoute
        });
    }
};