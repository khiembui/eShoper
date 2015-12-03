﻿'use strict';
angular.module('deal.services').factory('backendHubProxy', ['$rootScope', 'backendServerUrl',
  function ($rootScope, backendServerUrl) {
      function backendFactory(serverUrl, hubName) {
          var connection = $.hubConnection(backendServerUrl);
          var proxy = connection.createHubProxy(hubName);

          connection.start().done(function () { });

          return {
              on: function (eventName, callback) {
                  proxy.on(eventName, function (result) {
                      $rootScope.$apply(function () {
                          if (callback) {
                              callback(result);
                          }
                      });
                  });
              },
              off: function (eventName, callback) {
                  proxy.off(eventName, function (result) {
                      $rootScope.$apply(function () {
                          if (callback) {
                              callback(result);
                          }
                      });
                  });
              },
              invoke: function (methodName, callback) {
                  proxy.invoke(methodName)
                  .done(function (result) {
                      $rootScope.$apply(function () {
                          if (callback) {
                              callback(result);
                          }
                      });
                  });
              }
          };
      };

      return backendFactory;
  }]);