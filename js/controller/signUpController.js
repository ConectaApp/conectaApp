app.controller('signUpController', function ($scope, $http, $location, $timeout) {
  $scope.load = function() {
       var script1 = document.createElement('script');
       script1.type = 'text/javascript';
       script1.src = "libs/framework/framework.js";
       document.body.appendChild(script1);
   };
  $scope.message='teste';
  $scope.load();


  var config = { headers : { 'Content-Type': 'application/json' }};
  $scope.cadastrar = function () {
    if($scope.cadForm.$invalid)
      return;
   var url = "http://www.escolaturmadochaves.com.br/app/control/post/realizaCadastro.php";
   var dados = {'nome': $scope.cadNome,'login':$scope.cadLogin,'pass' :$scope.cadPass};
    $http.post(url,dados,config)
     .then(function (response) {
         $scope.jsonList = response.data;
         $('.w-form-done').attr('style','display:block');
         $timeout(function() {
           $location.path("/login")
         }, 4000);
    }, function(error) {
         $('.w-form-fail').attr('style','display:block');
      alert('Não foi possível concluír a operação');
        console.info("Erro: ",error);
    });
 };

})
