// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);
console.log(numero + numeroString);

// conversão explícita -> Number() e String()
console.log(numero + Number(numeroString));
console.log(String(numero).toLowerCase()); // não muda nada, mas demonstra que agora 'numero' é uma string