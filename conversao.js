//1-celsius,2-kelvin,3-fahreith
var tempOrigem=1
var tempDestino=2
var temperatura=36
var resultado=temperatura 
if (tempOrigem==1){
    if(tempDestino==2){
        resultado=temperatura+273
    } else if (tempDestino==3){
        resultado=(9*temperatura+160)/5
    } else {
        resultado=temperatura
    }
}
console.log(resultado)