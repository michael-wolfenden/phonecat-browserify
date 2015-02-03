'use strict';

module.exports =
    /*@ngInject*/
    function Phone($routeParams, $http) {
        var vm = this;
        vm.setImage = setImage;

        _activate();

        function _activate() {
            $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
                vm.phone = data;
                vm.mainImageUrl = data.images[0];
            });
        }

        function setImage(imageUrl) {
            vm.mainImageUrl = imageUrl;
        }
    };