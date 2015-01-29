'use strict';

require('angular');

angular.module('app', [
    require('./core/core.module').name,

    require('./phones/phones.module').name,
    require('./phone/phone.module').name
]);

