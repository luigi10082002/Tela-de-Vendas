
<script type="text/javascript" charset="ISO-8859-1">
    /* <![CDATA[ */
    var ch = false;
    var JanelaCR = false;
    var tempoModal = 1;
    var obj_global = {};


    var app = angular.module('app', ['ngResource', 'ngMask', 'proxy_global_querys', 'br-number', 'array-utils']);

    app.controller('WDIController', function ($scope, $http, $location, globalServices, ArrayManager, filter, $timeout) {
        $scope.prot = {};
        $scope.prot.fornecedor = 'Weg - motores';
        $scope.prot.produto = 'Motor El�trico';
        $scope.prot.documento = '';
        $scope.projeto = {};

        $scope.cadastros_wdi = {};

        $scope.voltar = function(){
            document.location.href = "../projetos/processos/treinamentos/tm.php";
        }

        $scope.dev = function(){

            alert('funcionalidade em desenvolvimento...');

        }


        $scope.loadCadastros = function(){


            $http.get('xhr/api.php?f=getCadastros').success(function (retorno) {

                $scope.cadastros_wdi = retorno;

            });




        }

        $scope.loadProjeto = function(){
                console.log('load');

                $http.get('xhr/api.php?f=loadProjeto&c=<?=$codigo_projeto?>').success(function (retorno) {
                    $scope.projeto = retorno;
                });


        }

        $scope.docAllClick = function(){
            if ($scope.docs){
                var i = 0;
                for(i=0;i < $scope.docs.length;i++){
                    $scope.docs[i].sol = $scope.docAll;
                }

            }
        }


        $scope.setProtocolo = function(item){
            $scope.itemEditado = item;
            //$scope.despEdit.tipo = tipo;
            angular.copy(item, $scope.prot);

            $('#templateProt').modal('show');

        }


        $scope.addProtocolo = function(){
            angular.copy($scope.prot, $scope.itemEditado);

            if ($scope.prot.tipo && $scope.prot.tipo == 'novo'){
                $scope.projeto.protocolos.push($scope.itemEditado);
            }

            $('#templateProt').modal('hide');
        }

        $scope.cancelProtocolo = function(){
            //angular.copy($scope.prot, $scope.itemEditado);
            $('#templateProt').modal('hide');
        }



        $scope.setTemplate = function(item, tipo){
            $('#templateProt').modal('hide');

            $http.get('xhr/api.php?f=getFiltro&frn='+escape(el('fornecedor').value)+"&pro="+escape(el('produto').value)).success(function (retorno) {
                    $scope.docs = retorno;

                    $('#templateDoc').modal('show');
            });


        }

        $scope.okTemplate = function(docs){
            let item = {};
            for (var i in docs){
                item = docs[i];
                console.log(item);

                if (item.sol == 'S'){
                    $scope.projeto.protocolos.push({

                        pedcompra: $scope.prot.pedcompra,
                        codfornecedor: item.codfornecedor,
                        coddocumento: item.coddocumento,
                        codproduto: item.codproduto,
                        produto: $scope.prot.produto,
                        dtprevisao: $scope.prot.dtprevisao,
                        documento:  item.documento,
                        fornecedor: item.fornecedor,
                        responsavel: $scope.prot.responsavel
                    });
                }
            }




            $('#templateDoc').modal('hide');
        }

        $scope.cancelTemplate = function(item, tipo){
            $('#templateDoc').modal('hide');
        }

        $scope.addOV = function(){
            $scope.projeto.ovs.push({});
        }


        $scope.removeOV = function(ov){
            var i = $scope.projeto.ovs.indexOf(ov);

            if (i != -1) {
                $scope.projeto.ovs.splice(i, 1);
            }
        }

        $scope.salvarProjeto = function () {
            $http.post("xhr/api.php?f=salvarProjeto", {obj: $scope.projeto}).success(function(ret){
                console.log(ret);
                if (ret.st == 'ok'){

                    $scope.loadProjeto();
                    alert(ret.msg);
                }

            });
        }



        $scope.loadProjeto();
    });


    function el(str){
        return document.getElementById(str);
    }



/* ]]> */

</script>

