const readLine = require('readline-sync');
const calcularIMC = require('./calcularIMC');

const peso = readLine.questionFloat('Qual seu peso ?');
const altura = readLine.questionFloat('Qual sua altura ?');

calcularIMC.calcularIMC(peso, altura);