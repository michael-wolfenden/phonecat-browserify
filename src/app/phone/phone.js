'use strict';

module.exports =
    /*@ngInject*/
    function Phone($routeParams, dataContext) {
        var vm = this;
        vm.setImage = setImage;

        _activate();

        function _activate() {
            vm.phone = dataContext.get({phoneId: $routeParams.phoneId}, function (phone) {
                vm.mainImageUrl = phone.images[0];
            });
        }

        function setImage(imageUrl) {
            vm.mainImageUrl = imageUrl;
        }
    };