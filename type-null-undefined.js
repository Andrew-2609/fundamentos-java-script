// nulo → a variável foi inicializada, mas não possui nenhum valor.
let input = null;

if (input == null) {
    console.log("Não há informação.");
} else {
    console.log(input);
}

// indefinido → a variável não chegou a ser inicializada
let segundoInput;

console.log(input);
console.log(segundoInput);

// comparando os dois tipos, de maneira menos e mais restritiva
console.log(input == segundoInput); // true
console.log(input === segundoInput); // false