const validator = (req, _res, next) => {
  const operacoesValidas = ['divisao', 'multiplicacao', 'subtracao', 'adicao'];
  const { operacao, numero1, numero2 } = req.params;
  if(operacao === 'divisao' && numero2 === 0) {
    next('numero 2 não pode ser zero!');
  } else if (typeof(parseInt(numero1)) !== 'number' || typeof(parseInt(numero2)) !== 'number') {
    next('somente números inteiros são permitidos.')
  } else if (isNaN(parseInt(parseInt(numero1))) || isNaN(parseInt(numero2))) {
    next('somente números inteiros são permitidos.')
  } else if (operacoesValidas.includes(operacao) === false) {
    next('operacao inválida');
  }
  next();
}

const adicao = (req, res, next) => {
  const { numero1, numero2 } = req.params;
  req.total = parseInt(numero1) + parseInt(numero2);
  next();
}

const subtracao = (req, res) => {
  const { numero1, numero2 } = req.params;
  req.total = parseInt(numero1) - parseInt(numero2);
}

const multiplicacao = (req, res) => {
  const { numero1, numero2 } = req.params;
  req.total = parseInt(numero1) * parseInt(numero2);
}

const divisao = (req, res) => {
  const { numero1, numero2 } = req.params;
  req.total = parseInt(numero1) / parseInt(numero2);
}

const erro = (err, _req, res, _next) => {
  res.status(500).send(err);
}


module.exports = { erro, validator, adicao, subtracao, multiplicacao, }