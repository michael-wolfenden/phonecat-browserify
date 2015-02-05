'use strict';

module.exports =
    /*@ngInject*/
    function checkmark() {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    };