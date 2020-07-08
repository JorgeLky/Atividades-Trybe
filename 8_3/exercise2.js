

// escreva sum abaixo

const sum = (...numeros) => {
  const soma = numeros.reduce((total, numero) => total += numero, 0);
  return (soma);
}

module.exports = sum;