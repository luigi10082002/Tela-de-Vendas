const _globalEnderecoNormal = 'http://localhost:8004/wdi/new/';

const SERVER_PATH = _globalEnderecoNormal + "servicos/";

angular.module('proxy_global_querys', [])

.service('http', function ($http, $q) {
    this.get = function (url)
    {
        var deferred = $q.defer();
        $http.get(url).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise
    }
})


.service('filter', function () {

    this.urlFilterBased = function (aArray) {
        url = "";
        angular.forEach(aArray, function (value, key) {
            if(value && value != "undefined" && value != ""){
                url += ("&" + key + "=" + value);
            }
        });
        return url;
    };

})

.service('globalServices', function(http, filter) {
    this.call = function(type, op, aFiltros) {
        if(!aFiltros) aFiltros = [];
        var url = SERVER_PATH + type + ".php?_p=" + op + filter.urlFilterBased(aFiltros);
        return http.get(url)
    };
})

.directive('proxyLoading', function () {
    return {
        restrict: "E",
        template: "<div style='z-index: 1000000; position: absolute; width: 100%; heigth: 100%; magin: 0 auto; background-color: #FFFFFF; opacity: 0.8; align: center; padding-bottom: 25%;'><center><img style='margin-top: 20%; width: 25%;' src='" + _globalEnderecoImages + "loading4.gif'></center></div>"
    };
})

.directive('success', function () {
    return {
        restrict: "E",
        transclude: true,
        template: "<div class='alert alert-success' role='alert' style='margin-left: 5%; margin-right: 5%;'>" +
            "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
            "<span class='sr-only'></span>" +
            "&nbsp<label ng-transclude></label>" +
        "</div>"
    };
})

.directive('primary', function () {
    return {
        restrict: "E",
        transclude: true,
        template: "<div class='alert alert-primary' role='alert' style='margin-left: 5%; margin-right: 5%;'>" +
            "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
            "<span class='sr-only'></span>" +
            "&nbsp<label ng-transclude></label>" +
        "</div>"
    };
})

.directive('info', function () {
    return {
        restrict: "E",
        transclude: true,
        template: "<div class='alert alert-info' role='alert' style='margin-left: 5%; margin-right: 5%;'>" +
            "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
            "<span class='sr-only'></span>" +
            "&nbsp<label ng-transclude></label>" +
        "</div>"
    };
})

.directive('warning', function () {
    return {
        restrict: "E",
        transclude: true,
        template: "<div class='alert alert-warning' role='alert' style='margin-left: 5%; margin-right: 5%;'>" +
            "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
            "<span class='sr-only'></span>" +
            "&nbsp<label ng-transclude></label>" +
        "</div>"
    };
})

.directive('danger', function () {
    return {
        restrict: "E",
        transclude: true,
        template: "<div class='alert alert-danger' role='alert' style='margin-left: 5%; margin-right: 5%;'>" +
            "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
            "<span class='sr-only'>Erro:</span>" +
            "&nbsp<label  ng-transclude></label>" +
        "</div>"
    };
})

;


