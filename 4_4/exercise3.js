let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim"
  };

function keys (x) {
    for (i in x) {
        console.log(i)
    }
}

keys (info);