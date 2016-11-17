app.controller('mainController', function ($scope, $http) {
  $scope.load = function() {
       var script1 = document.createElement('script');
       script1.type = 'text/javascript';
       script1.src = "libs/framework/framework.js";
       document.body.appendChild(script1);

   };
   $scope.load();

  var config = { headers : { 'Content-Type': 'application/json' }};
  $scope.dados = function () {
   var url = "http://www.escolaturmadochaves.com.br/app/control/get/carregaDados.php";
   var id = localStorage.getItem('id');
   var dados = id;
    $http.post(url,dados,config)
     .then(function (response) {
         $scope.retorno = response.data;
         console.info($scope.retorno);
    }, function(error) {
        console.info("Erro: ",error);
    });
  };
  $scope.dados();
})
