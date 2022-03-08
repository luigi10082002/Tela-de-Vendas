var app = angular.module("app", [
  "ngResource",
  "ngMask",
  "proxy_global_querys",
  "br-number",
  "array-utils",
]);

app.controller(
  "DashController",
  function (
    $scope,
    $http,
    $location,
    globalServices,
    ArrayManager,
    filter,
    $timeout
  ) {
    $scope.loadProjeto = function () {
      //console.log("load");

      $http
        .get("http://192.168.15.119:8000/batch/testes/api.php")
        .success(function (retorno) {
          $scope.api = retorno;

          //console.log($scope.api.painel_1);
        });
    };

    $scope.loadProjeto();
  }
);

function el(str) {
  return document.getElementById(str);
}

/* ]]> */
