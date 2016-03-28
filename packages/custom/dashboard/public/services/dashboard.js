(function () {
  'use strict';

  angular
    .module('mean.dashboard')
    .factory('Dashboard', Dashboard);

  Dashboard.$inject = [];

  function Dashboard() {
    return {
      name: 'dashboard'
    };
  }
})();
