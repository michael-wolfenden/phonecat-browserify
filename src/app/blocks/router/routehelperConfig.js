'use strict';

module.exports =
/*@ngInject*/
function routehelperConfig() {

    this.config = {
        $routeProvider: null,
        defaultRoute: '/'
    };

    this.$get = function () {
        return {
            config: this.config
        };
    };
};