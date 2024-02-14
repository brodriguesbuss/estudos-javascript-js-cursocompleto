/**
 * FUNCOES - HÁ 3 TIPOS
 * Expressão de funcao, anonimas e arrow functions
 * 
 * FUNCOES - EXPRESSÃO DE FUNCAO
 */
function somar(x1, x2) {
  return x1 + x2;
}
let resultado = somar(1, 2);
console.log(resultado);
//Retorna 3

// Outro exemplo
function calc(x3, x4, operator) {
  return `${x3} ${operator} ${x4}`;
}
let resultado2 = calc(1, 2, "+");
console.log(resultado2);
//Retorna 1 + 2

// Para realizar a operação 1 + 2 = 3, nós podemos usar a funcao nativa do js
function calc2(x5, x6, operator) {
  return eval(`${x5} ${operator} ${x6}`);
}
let resultado3 = calc2(1, 2, "-");
console.log(resultado3);
//Retorna -1

/**
 * FUNCOES - ANONIMAS
 */
(function (x7, x8, operator) {
  return eval(`${x7} ${operator} ${x8}`);
})(1, 2, "-");

/**
 * FUNCOES - ARROW FUNCTION
 */
let calc3 = (x9, x10, operator) => {
  return eval(`${x9} ${operator} ${x10}`);
};
let resultado4 = calc3(1, 2, "-");
console.log(resultado4);
//Retorna -1

/**
 * EVAL()
 * interpreta uma string como um script
 */


/**
 * EVENTOS
 * métodos nativo do JavaScript usado para criar um evento
 */

//window - janela
window.addEventListener("focus", (event) => {
  console.log("focus");
});

//document - body
document.addEventListener("click", (event) => {
  console.log("clique");
});

/**
 * DATE
 */
let agora = Date.now();
console.log(agora);
// retorna segundos desde 1970

let agora2 = new Date();
console.log(agora2);
// retorna Tue Feb 13 2024 22:00:14 GMT-0300 (Horário Padrão de Brasília)

let agora3 = new Date();
console.log(agora3.getDate());
// retorna 13

let agora4 = new Date();
console.log(agora4.getFullYear());
// retorna 2024

let agora5 = new Date();
console.log(agora5.getMonth());
// retorna 1 pq é um array e começa no index 0

let agora6 = new Date();
console.log(agora6.toLocaleDateString("pr-BR"));
// retorna 13/02/2024

/**
 * ARRAYS
 */
let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function () {}];
// O array pode ser de qq tipo, não precisa ser tudo de string, ou só numeros

console.log(carros);
console.log(carros.length);
console.log(carros[2]);
console.log(carros[5].getFullYear());

//Laco pra percorrer array
carros.forEach(function (value, index) {
  console.log(index, value);
});

/**
 * THIS
 */

let celular1 = function () {
  let cor = "prata";
};
let objeto = new celular1();
console.log(objeto);
// Quando chama o objeto, não vem a cor, pois a cor está dentro da funcao

let celular2 = function () {
  this.cor = "prata";
};
let objeto2 = new celular2();
console.log(objeto2);
console.log(objeto2.cor);
// Ao usar o this vc está acessando algo que está dentro do objeto
// Nesse caso, vem a cor que é uma string, mas funciona pra metodos e outras coisas

let celular3 = function () {
  this.cor = "prata";
  this.ligar = function () {
    console.log("uma ligacao");
    return "ligando";
  };
};
let objeto3 = new celular3();
console.log(objeto3.ligar());
// Exemplo com function


//No arquivo indexAula5-Class.js, é mostrado como se faz esse ultimo bloco usando POO 