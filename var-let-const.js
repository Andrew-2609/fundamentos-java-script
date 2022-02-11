// var
var alturaVar = 5;
var comprimentoVar = 7;

areaVar = alturaVar * comprimentoVar;

console.log(`areaVar: ${areaVar}`);
var areaVar;

// let
let alturaLet = 5;
let comprimentoLet = 7;
let areaLet;
let formaLet = "retângulo";

if (formaLet === "retângulo") {
    areaLet = alturaLet * comprimentoLet;
} else {
    areaLet = (alturaLet * comprimentoLet) / 2;
}

console.log(`areaLet: ${areaLet}`);

// const
const formaConst = "quadrado";
const alturaConst = 5;
const comprimentoConst = 7;
const areaConst = alturaConst * comprimentoConst;

if (formaConst !== "quadrado") {
    // areaConst = 3; constantes não podem ter seus valores reatribuídos
}

console.log(`areaConst: ${areaConst}`)