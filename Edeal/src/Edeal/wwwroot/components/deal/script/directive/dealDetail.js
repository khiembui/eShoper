angular.module('deal.directives').controller('dealDetailController', ['$scope', 'backendServerUrl', 'dealDetailService',
  function ($scope, backendServerUrl, dealDetailService) {
      $scope.messages = [];

      $scope.chatHub = $.connection.chatHub;

      $.connection.hub.start().done();

      $scope.chatHub.client.appendNewMessage = function (clientName, message) {
          $scope.messages.push(message);
          $scope.$apply();
      };

      $scope.newMessage = function () {
          $scope.chatHub.server.broadcastMessage('A', $scope.name, $scope.message);
      };
  }
]).directive('dealDetail', [function () {
    return {
        restrict: 'E',
        templateUrl: 'components/deal/html/dealdetailhtml.html',
        controller: 'dealDetailController'
    };
}]);