(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    let items;

    $scope.checkIfTooMuch = function () {
        items = $scope.items;
        countItems = countItems();
        if (countItems <= 3) {
            $scope.message = "Enjoy!";
        } else if (countItems == 0) {
            $scope.message = "Please enter data first"
        } else {
            $scope.message = "Too much!";
        }
    }

    function countItems() {
        return items.split(',').length;
    }
}

})();
