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
                url: '/phones/:phoneId',
                config: {
                    controller: 'Phone',
                    controllerAs: 'vm',
                    template: fs.readFileSync(__dirname + '/phone.html', 'utf8')
                }
            }
        ];
    }
