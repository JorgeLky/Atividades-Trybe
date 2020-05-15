let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim"
  };

  let info2 = {
      personagem: "Tio Patinhas",
      origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
      nota: "O último MacPatinhas",
      recorrente: "sim"
  }

  let reference1 = 1;
  let reference2 = 7;

  for (i in info) {
      for (x in info2) {
        if ( x === i && reference1 !== reference2 ) {
            console.log(info[i] + " e " + info2[x]);
            ++reference1
            --reference2 
          } else if (reference1 === 4 && reference2 === 4) {
            console.log("ambos recorrentes");
            break;
          }
      }
  }
