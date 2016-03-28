(function () {
  'use strict';

  angular
   .module('mean.dashboard')
   .config(dashboard);

  dashboard.$inject = ['$stateProvider','$viewPathProvider'];

  function dashboard($stateProvider,$viewPathProvider) {
    $stateProvider
    .state('dashboard example page', {
      url: '/dashboard/example',
      templateUrl: 'dashboard/views/example.html'
    })
    .state('test', {
      url: '/dashboard',
      templateUrl: 'dashboard/views/index.html'
    })
    ;
    $viewPathProvider.override('system/views/index.html', 'dashboard/views/index.html');
  }

})();
