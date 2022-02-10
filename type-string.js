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