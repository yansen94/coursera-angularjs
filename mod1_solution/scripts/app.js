(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    let items;
    let count;

    $scope.checkIfTooMuch = function () {
        items = $scope.items;
        count = countItems();
        if (count <= 3 && count != 0) {
            $scope.message = "Enjoy!";
        } else if (count == 0) {
            $scope.message = "Please enter data first"
        } else {
            $scope.message = "Too much!";
        }
    }

    function countItems() {
        if (items == undefined) return 0;
        else return items.split(',').length;
    }
}

})();
