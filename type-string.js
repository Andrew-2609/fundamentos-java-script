const primeiroTexto = "Olá, mundo!";
const segundoTexto = 'Olá, mundo!';

console.log("Com aspas duplas: " + primeiroTexto);
console.log("Com aspas simples: " + segundoTexto);

const citacao = 'O professor disse "Bom dia, turma!".';
console.log(citacao)

// caracteres especiais com unicode \u
const hiragana = '\u3041'

// template string/literal
const explicacao = `A letra "a" em japonês é escrita com o seguinte hiragana: ${hiragana}.`;
console.log(explicacao);

// comparando strings
const cidadeLower = "belo horizonte";
const cidadeNormal = "Belo Horizonte";

const identico = cidadeLower === cidadeNormal; // false

console.log(`As strings são idênticas? R: ${identico}`);

const identicoToLower = cidadeLower === cidadeNormal.toLowerCase(); // true

console.log(`As strings são idênticas agora? R: ${identicoToLower}`);

// checando quantidade de caracteres de uma string

const senha = "123456789pass";

console.log(`Comprimento da senha: ${senha.length}`);