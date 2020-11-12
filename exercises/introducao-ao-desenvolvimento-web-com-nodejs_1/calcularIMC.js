const calcularIMC = (P, A) => {
  const IMC = (P/(A ** 2)).toFixed(2);
  if(IMC < 18.5) {
    console.log(`${IMC}, Abaixo do peso (magreza)`);
  } else if (IMC > 18.5 && IMC < 24.9) {
    console.log(`${IMC}, Peso normal`);
  } else if (IMC > 25.0 && IMC < 29.9) {
    console.log(`${IMC}, Acima do peso (sobrepeso)`);
  } else if (IMC > 30.0 && IMC < 34.9) {
    console.log(`${IMC}, Obesidade grau I`); 
  } else if (IMC > 35.0 && IMC < 39.9) {
    console.log(`${IMC}, Obesidade grau II`);
  } else {
    console.log(`${IMC}, Obesidade grau III`) 
  }
}

module.exports = { calcularIMC }