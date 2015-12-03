angular.module('deal.services').factory('dealDetailService', ['$http', 'backendServerUrl',
  function ($http, backendServerUrl) {
      var url = backendServerUrl + '/api/deal'
      return {
          getData : function(success){
              $http.get(url).success(success);
          }
      }
  }]);