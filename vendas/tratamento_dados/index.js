
function LinkUrl(url) {
  fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    //console.log(response);

    const db = response;

    Painel_1(db)
    //Painel_2(db)
    //Painel_3(db)
    //Painel_4(db)
    //Painel_5(db)
    //Painel_6(db)
  })

}

function Painel_1(db) {

  const painel_1 = db.painel_1

  //Obj 1
  painel_1.forEach(function(infos) {

    const op = infos.operacao
    const qtd = infos.qtd
    const valor_1 = infos.valor

    const valor = valor_1.replace(".", ",");

    console.log("=========================")

    console.log(op)
    console.log(qtd)
    console.log(valor)

    console.log("=========================")

    linha = document.getElementById("linha_1");
    tdOp = document.getElementById("body-tableLeft");
    tdQtd = document.getElementById("qtd-Encomendas1");
    tdValor = document.getElementById("valor-Encomendas1");

    tdOp.innerHTML = op
    tdQtd.innerHTML = qtd
    tdValor.innerHTML = valor

  })
}

/*
function Painel_2(db) {

  const painel_2 = db.painel_2

  //Obj 2
  painel_2.forEach(function(infos) {

    const op = infos.operacao
    const qtd = infos.qtd
    const valor_1 = infos.valor

    const valor = valor_1.replace(".", ",");

    const strOp = op.toString()

    console.log(strOp)
    console.log(qtd)
    console.log(valor)

  })
}

function Painel_3(db) {

  const painel_3 = db.painel_3

  //Obj 3
  painel_3.forEach(function(infos) {

    const op = infos.operacao
    const qtd = infos.qtd
    const valor = infos.valor

    const strOp = op.toString()

    //console.log(strOp)
    //console.log(qtd)
    //console.log(valor)

  })
}

function Painel_4(db) {

  const painel_4 = db.painel_4

  //Obj 4
  painel_4.forEach(function(infos) {

    const op = infos.operacao
    const qtd = infos.qtd
    const valor = infos.valor

    const strOp = op.toString()

    //console.log(strOp)
    //console.log(qtd)
    //console.log(valor)

  })
}

function Painel_5(db) {

  const painel_5 = db.painel_5

  //Obj 5
  painel_5.forEach(function(infos) {

    const op = infos.operacao
    const qtd = infos.qtd
    const valor = infos.valor

    const strOp = op.toString()

    //console.log(strOp)
    //console.log(qtd)
    //console.log(valor)

  })
}

function Painel_6(db) {

  const painel_6 = db.painel_6

  //Obj 6
  painel_6.forEach(function(infos) {

    const op = infos.operacao
    const qtd = infos.qtd
    const valor = infos.valor

    const strOp = op.toString()

    //console.log(strOp)
    //console.log(qtd)
    //console.log(valor)

  })
}
*/
LinkUrl("http://192.168.15.119:8000/batch/testes/api.php")

