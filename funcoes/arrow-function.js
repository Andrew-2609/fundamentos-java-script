// Arrow Function
const apresentar = nome => `Meu nome é ${nome}.`;
const somar = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero;

console.log(apresentar("Andrew"));
console.log(`2 + 3 = ${somar(2, 3)}`);

// Arrow Function com mais de uma linha de instrução
const somarNumerosMenoresQueDez = (primeiroNumero, segundoNumero) => {
    if (primeiroNumero >= 10 || segundoNumero >= 10) {
        return 'Operação inválida! Algum dos números passados é maior ou igual a 10.';
    }

    return primeiroNumero + segundoNumero;
}

console.log(`Tentando somar 8 com 10: ${somarNumerosMenoresQueDez(8, 10)}`);
console.log(`Tentando somar 8 com 9: ${somarNumerosMenoresQueDez(8, 9)}`);