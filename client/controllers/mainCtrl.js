angular.module('extreme').controller('mainCtrl', function($scope, $mdDialog, $mdMedia) {

  $scope.showDialog = function(ev){
    $mdDialog.show({
      templateUrl: './../views/new-trip.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
    }).then(function(ev){
      $scope.hide = function() {
        $mdDialog.hide();
      };
    });
  };
  function DialogController($scope, $mdDialog) {

  $scope.cancel = function() {
    $mdDialog.cancel();
  };
};

})
