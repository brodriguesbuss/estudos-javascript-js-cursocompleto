/**
 * OLA MUNDO
 */
console.log("Olá mundo");

/**
 * VARIAVEIS
 * var - define variavel
 * let - leva em consideração o escopo onde foi definida
 * const - valor nunca muda
 */
var olaMundao = "Olá mundao";
console.log(olaMundao);
console.log(olaMundao);
console.log(olaMundao);

/**
 * OUTROS
 * Arrays - conjunto de mesmo nome e tipo
 * typeOf - mostra o tipo de dado
 * instanceOf - mostra de qual instacia veio
 * parseInt, parseFloat, toString - funcoes de conversao
 */

/**
 * OPERADORES - Atribuicao (=)
 */

let x = 10;

/**
 * OPERADORES - Comparacao de conteudo (==)
 */
let a = 10;
const b = 20;
console.log(a == b);
//retorna false pois 10 e diferente de 20

let c = 10;
const d = "10";
console.log(c == d);
//retorna true pois esse comparador compara o conteudo e nao o tipo de cada

/**
 * OPERADORES - Comparacao de conteudo e de tipo de variavel (===)
 */
let e = 10;
const f = "10";
console.log(e === f);
//retorna false pois o numero é igual mas o tipo é diferente, um é numero e outro é string

/**
 * OPERADORES - Negacao da Comparacao de conteudo e de tipo de variavel (!==)
 */
let g = 10;
const h = "10";
console.log(g !== h);
//retorna true pois o resultado é invertido

/**
 * OPERADORES - Negacao da Comparacao de conteudo (!=)
 */
let i = 10;
const j = "10";
console.log(i != j);
//retorna false pois o resultado é invertido

/**
 * OPERADORES LÓGICOS - And (&&)
 * Ambas as condicoes precisa ser verdadeira
 */
let k = 10;
const l = "10";
console.log(k == l && typeof l == "string");
// retorna true porque é verdadeiro que o valor de k é igual l e
// é verdadeiro que o tipo de l é string

let m = 10;
const n = "10";
console.log(m == n && typeof m == "string");
// retorna false porque é verdadeiro que o valor de m é igual n mas
// não é verdadeiro que o tipo de m é string

/**
 * OPERADORES LÓGICOS - Or (||)
 * Apenas uma das condicoes precisa ser verdadeira
 */
let o = 10;
const p = "10";
console.log(o == p || typeof o == "string");
// retorna true porque é verdadeiro que o valor de o é igual p
// mesmo que não é verdadeiro que o tipo de o é string, um ja foi verdadeiro

/**
 * IF
 */

let cor = "verde";

if (cor === "verde") {
  console.log("siga");
} else {
  console.log("pare");
}
// retorna siga

//Alterando a cor
let cor2 = "amarelo";

if (cor2 === "verde") {
  console.log("siga");
} else {
  console.log("pare");
}
// retorna pare

// Adicionando outras condicoes
let cor3 = "amarelo";

if (cor3 === "verde") {
  console.log("siga");
} else if (cor3 === "amarelo") {
  console.log("atencao");
} else {
  console.log("pare");
}
// retorna atencao

// Adicionando outras condicoes
let cor4 = "azul";

if (cor4 === "verde") {
  console.log("siga");
} else if (cor4 === "amarelo") {
  console.log("atencao");
} else if (cor4 === "vermelho") {
  console.log("pare");
}
// retorna NADA

/**
 * SWITCH - Usar quando ja sabe as condicoes que vao existir
 */
let cor5 = "azul";

switch (cor5) {
  case "verde":
    console.log("siga");
    break;
  case "amarelo":
    console.log("atencao");
    break;
  case "vermelho":
    console.log("pare");
    break;
  default:
    console.log("nao sei");
}

/**
 * LACOS DE REPETICAO
 *
 * forInt - usar quando sabe a quantidade de vezes que precisar executar
 * forEach - usar quando quer percorrer um array
 * forIn - usar quando quer percorer nome de atributo de objeto
 * while - executa até chegar na condicao
 * doWhile - executa pelo menos 1 vez
 * break - interrompe laco de repeticao, deve usar dentro do if
 * continue - usar quanto quer ignorar instrucao e ir pra proxima volta do laco
 */

let aa = 5;

for (let i = 0; i <= 10; i++) {
  console.log(`${i} X ${aa} = ${i * aa}`);
}
//imprime a tabuada do 5

/**
 * TEMPLATE STRING
 * Recurso que permite escrever string e variaveis 
 * `${variavel} texto `
 */
