
const urlCompras = "http://192.168.15.119:8000/batch/testes/api.php";

fetch(urlCompras)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    Tratamento_De_Dados_Linha_1_Painel_6(response);

    Tratamento_De_Dados_Linha_2_Painel_6(response);

    Tratamento_De_Dados_Linha_3_Painel_6(response);

    //Tratamento_De_Dados_Linha_4_Painel_6(response);

    //Tratamento_De_Dados_Linha_5_Painel_6(response);

    //Tratamento_De_Dados_Linha_6_Painel_6(response);
  });

  
function Tratamento_De_Dados_Linha_1_Painel_6(response) {
  const dados = response;

  const data = Object.entries(dados);

  const painel_1 = data[4];

  const linha_1 = Object.entries(painel_1[1]);

  const array_1 = Object.entries(linha_1[0]);

  const objeto_1 = Object.values(array_1[1]);

  const objeto_2 = Object.values(objeto_1[1]);

  const array_dados = Object.values(objeto_2);

  qtd_1 = array_dados[1];
  valor_1 = array_dados[2];

  valor = valor_1.replace(".", ",");

  linha = document.getElementById("linha_1");
  tdQtd = document.getElementById("qtd-Compras1");
  tdValor = document.getElementById("valor-Compras1");

  tdQtd.innerHTML = qtd_1;
  tdValor.innerHTML = valor;

  //console.log(valor);
  //console.log("===================");
  //console.log(valor);
  //console.log("===============================");
}

function Tratamento_De_Dados_Linha_2_Painel_6(response) {
  const dados = response;

  const data = Object.entries(dados);

  const painel_1 = data[4];

  const linha_1 = Object.entries(painel_1[1]);

  const array_1 = Object.entries(linha_1[1]);

  const objeto_1 = Object.values(array_1[1]);

  const objeto_2 = Object.values(objeto_1[1]);

  const array_dados = Object.values(objeto_2);

  qtd_1 = array_dados[1];
  valor_1 = array_dados[2];

  valor = valor_1.replace(".", ",");

  linha = document.getElementById("linha_2");
  tdQtd = document.getElementById("qtd-Compras2");
  tdValor = document.getElementById("valor-Compras2");

  tdQtd.innerHTML = qtd_1;
  tdValor.innerHTML = valor;

  //console.log(tdQtd);
  //console.log("===================");
  //console.log(valor);
  //console.log("===============================");
}

function Tratamento_De_Dados_Linha_3_Painel_6(response) {
  const dados = response;

  const data = Object.entries(dados);

  const painel_1 = data[4];

  const linha_1 = Object.entries(painel_1[1]);

  const array_1 = Object.entries(linha_1[2]);

  const objeto_1 = Object.values(array_1[1]);

  const objeto_2 = Object.values(objeto_1[1]);

  const array_dados = Object.values(objeto_2);

  qtd_1 = array_dados[1];
  valor_1 = array_dados[2];

  valor = valor_1.replace(".", ",");

  linha = document.getElementById("linha_3");
  tdQtd = document.getElementById("qtd-Compras3");
  tdValor = document.getElementById("valor-Compras3");

  tdQtd.innerHTML = qtd_1;
  tdValor.innerHTML = valor;

  //console.log(qtd_1)
  //console.log("===================")
  //console.log(valor)
  //console.log("===============================");
}
/**/
