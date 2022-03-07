
const urlOS = "http://192.168.15.119:8000/batch/testes/api.php";

fetch(urlOS)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    Tratamento_De_Dados_Linha_1_Painel_3(response);

    Tratamento_De_Dados_Linha_2_Painel_3(response);

    Tratamento_De_Dados_Linha_3_Painel_3(response);

    Tratamento_De_Dados_Linha_4_Painel_3(response);

    Tratamento_De_Dados_Linha_5_Painel_3(response);
  });

  
function Tratamento_De_Dados_Linha_1_Painel_3(response) {
  const dados = response;

  const data = Object.entries(dados);

  const painel_1 = data[2];

  const linha_1 = Object.entries(painel_1[1]);

  const array_1 = Object.entries(linha_1[0]);

  const objeto_1 = Object.values(array_1[1]);

  const objeto_2 = Object.values(objeto_1[1]);

  const array_dados = Object.values(objeto_2);

  qtd_1 = array_dados[1];
  valor_1 = array_dados[2];

  valor = valor_1.replace(".", ",");

  linha = document.getElementById("linha_1");
  tdQtd = document.getElementById("qtd-OS1");
  tdValor = document.getElementById("valor-OS1");

  tdQtd.innerHTML = qtd_1;
  tdValor.innerHTML = valor;

  //console.log(valor);
  //console.log("===================");
  //console.log(valor);
  //console.log("===============================");
}

function Tratamento_De_Dados_Linha_2_Painel_3(response) {
  const dados = response;

  const data = Object.entries(dados);

  const painel_1 = data[2];

  const linha_1 = Object.entries(painel_1[1]);

  const array_1 = Object.entries(linha_1[1]);

  const objeto_1 = Object.values(array_1[1]);

  const objeto_2 = Object.values(objeto_1[1]);

  const array_dados = Object.values(objeto_2);

  qtd_1 = array_dados[1];
  valor_1 = array_dados[2];

  valor = valor_1.replace(".", ",");

  linha = document.getElementById("linha_2");
  tdQtd = document.getElementById("qtd-OS2");
  tdValor = document.getElementById("valor-OS2");

  tdQtd.innerHTML = qtd_1;
  tdValor.innerHTML = valor;

  //console.log(tdQtd);
  //console.log("===================");
  //console.log(valor);
  //console.log("===============================");
}

function Tratamento_De_Dados_Linha_3_Painel_3(response) {
  const dados = response;

  const data = Object.entries(dados);

  const painel_1 = data[2];

  const linha_1 = Object.entries(painel_1[1]);

  const array_1 = Object.entries(linha_1[2]);

  const objeto_1 = Object.values(array_1[1]);

  const objeto_2 = Object.values(objeto_1[1]);

  const array_dados = Object.values(objeto_2);

  qtd_1 = array_dados[1];
  valor_1 = array_dados[2];

  valor = valor_1.replace(".", ",");

  linha = document.getElementById("linha_3");
  tdQtd = document.getElementById("qtd-OS3");
  tdValor = document.getElementById("valor-OS3");

  tdQtd.innerHTML = qtd_1;
  tdValor.innerHTML = valor;

  //console.log(qtd_1)
  //console.log("===================")
  //console.log(valor)
  //console.log("===============================");
}

function Tratamento_De_Dados_Linha_4_Painel_3(response) {
  const dados = response;

  const data = Object.entries(dados);

  const painel_1 = data[2];

  const linha_1 = Object.entries(painel_1[1]);

  const array_1 = Object.entries(linha_1[3]);

  const objeto_1 = Object.values(array_1[1]);

  const objeto_2 = Object.values(objeto_1[1]);

  const array_dados = Object.values(objeto_2);

  qtd_1 = array_dados[1];
  valor_1 = array_dados[2];

  valor = valor_1.replace(".", ",");

  linha = document.getElementById("linha_4");
  tdQtd = document.getElementById("qtd-OS4");
  tdValor = document.getElementById("valor-OS4");

  tdQtd.innerHTML = qtd_1;
  tdValor.innerHTML = valor;

  //console.log(qtd_1);
  //console.log("===================");
  //console.log(valor);
  //console.log("===============================");
}
/**/

function Tratamento_De_Dados_Linha_5_Painel_3(response) {
  const dados = response;

  const data = Object.entries(dados);

  const painel_1 = data[2];

  const linha_1 = Object.entries(painel_1[1]);

  const array_1 = Object.entries(linha_1[4]);

  const objeto_1 = Object.values(array_1[1]);

  const objeto_2 = Object.values(objeto_1[1]);

  const array_dados = Object.values(objeto_2);

  qtd_1 = array_dados[1];
  valor_1 = array_dados[2];

  valor = valor_1.replace(".", ",");

  linha = document.getElementById("linha_5");
  tdQtd = document.getElementById("qtd-OS5");
  tdValor = document.getElementById("valor-OS5");

  tdQtd.innerHTML = qtd_1;
  tdValor.innerHTML = valor;

  //console.log(tdQtd)
  //console.log("===================")
  //console.log(valor_1)
  
}
