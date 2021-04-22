class Estacionamento(self):
    def __init__(self):
        self._estacionamento = []
    
    def estacionar(self, carro):
        self._estacionamento.push(carro)

    def retirar(self, carro):
        vaga = self._estacionamento.index(carro)
        rua = []
        while len(self._estacionamento) > vaga:
            rua.append(self._estacionamento.pop())
        self._estacionamento.pop()
        for voltar in rua:
            self._estacionamento.push(voltar)
        
        