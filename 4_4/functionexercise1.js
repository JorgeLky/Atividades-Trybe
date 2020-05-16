let word = "horta"

function palindromeVerification(x) {
    let drow ="";
    for (i = x.length -1; i >= 0; --i) {
        drow+= x[i]
    }
   if (drow === x) {
        console.log(true);
    } else {
        console.log(false)
    }
    console.log(drow)
}

palindromeVerification(word);
