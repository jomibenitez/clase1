const numeros = [12,39,558,5,7,122];

var mayor = 0;

for(var i=0; i<numeros.length; i++) {
    if(numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

console.log(`El mayor de ${numeros} es ${mayor}`)