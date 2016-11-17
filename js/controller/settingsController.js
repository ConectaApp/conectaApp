app.controller('settingsController', function ($scope, $http) {
  $scope.load = function() {
       var script1 = document.createElement('script');
       script1.type = 'text/javascript';
       script1.src = "libs/framework/framework.js";
       document.body.appendChild(script1);
   };
   $scope.load();
})
