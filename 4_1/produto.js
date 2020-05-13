let compra = 30;
let venda = 50;
let lucro = 0;
let lucroBruto = 0;

if (compra > 0 && venda > 0) {
    lucro = (venda - compra);
    lucroBruto = (lucro * 0.8) * 1000;
    console.log(lucroBruto)   
} else {
    console.log("error! valor de compra ou valor de venda deve ser maior que 0");
}