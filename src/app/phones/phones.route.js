'use strict';

var fs = require('fs');

module.exports =
    /*@ngInject*/
    function registerRoute(routehelper) {
        routehelper.configureRoutes(getRoutes());
    };

    function getRoutes() {
        return [
            {
                url: '/phones',
                config: {
                    controller: 'Phones',
                    controllerAs: 'vm',
                    template: fs.readFileSync(__dirname + '/phones.html', 'utf8')
                }
            }
        ];
    }
