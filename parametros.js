// Função com dois parâmetros básicos
function somar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}

// Função com dois parâmetros com valores padrão
function multiplicar(primeiroNumero = 1, segundoNumero = 1) {
    return primeiroNumero * segundoNumero;
}

console.log(somar(5, 5));
console.log(multiplicar(9));
console.log(multiplicar(somar(1, 1), somar(3, 7)));

// Bônus

function cumprimentar(idioma = 'pt') {
    if (idioma === 'en') {
        return 'Hello!';
    } else if (idioma === 'de') {
        return 'Hallo!';
    } else if (idioma === 'ja') {
        return 'こんにちは！';
    }

    return 'Olá!';
}

console.log(`${cumprimentar('ja')} Como você está?`);