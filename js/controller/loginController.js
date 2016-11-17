app.controller('loginController', function ($scope, $http,$location){
  $scope.load = function() {
       var script1 = document.createElement('script');
       script1.type = 'text/javascript';
       script1.src = "libs/framework/framework.js";
       document.body.appendChild(script1);
   };
  $scope.message='teste';
  $scope.load();


  var config = { headers : { 'Content-Type': 'application/json' }};
  $scope.entrar = function () {
   var url = "http://www.escolaturmadochaves.com.br/app/control/get/realizaLogin.php";
    var dados = {'login': $scope.getLogin,'pass' :$scope.getPass};
    $http.post(url,dados,config)
     .then(function (response) {
         $scope.retorno = response.data;
         console.log($scope.retorno);
         localStorage.setItem('id',$scope.retorno);
         if (response.data != '') {
            $location.path("/main");
         }else{
            $('.w-form-fail').attr('style','display:block');

         }
    }, function(error) {
        console.info("Erro: ",error);
    });
 };



})
