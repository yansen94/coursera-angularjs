(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    let items;

    $scope.checkIfTooMuch = function () {
        items = $scope.items;
        if (countItems() <= 3) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
    }

    function countItems() {
        return items.split(',').length;
    }
}

})();