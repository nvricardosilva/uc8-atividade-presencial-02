var a=10
var b=20
var c=6
var delta=b*b-4*a*c
console.log(delta)
if (delta<0){
    console.log('não é possivel obter x1 e x2')
}else{
        var x1=(-b+Math.sqrt(delta))/(2*a)
        var x2=(-b-Math.sqrt(delta))/(2*a)
        console.log('Valor de x1', x1)
        console.log('Valor de x2',x2)
    }