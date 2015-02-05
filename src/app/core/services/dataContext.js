'use strict';

module.exports =
    /*@ngInject*/
    function dataContext($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    };
