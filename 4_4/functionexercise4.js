let example = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function higherArray(w){
    let word = "";
    for (i = 0; i <= w.length-1; i++) {
        if (w[i].length > word.length) {
            word = w[i];
        }
    }
    console.log(word);
}

higherArray(example);