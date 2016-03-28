(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', 'Global', 'Dashboard'];

  function DashboardController($scope, Global, Dashboard) {
    $scope.global = Global;
    $scope.package = {
      name: 'dashboard'
    };
  }
})();