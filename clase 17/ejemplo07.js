const frutas = ['palta', 'peras', 'kiwi', 'bananas', 'durazno', 'anana', 'manzana'];
console.log(frutas.sort())//ordena albabeticamente 

const numeros = [5, 9, 3, 44, 10];
console.log(numeros.sort())

const num = numeros.sort(function(a,b){
    return a-b;//al revez tambien funciona, ordena los numeros de mayor a menor (a,b) return b-a
});
console.log(num);

const palabras = ['flavia', 'casa', 'perro', 'animal', 'aveja'];
console.log(palabras.sort().reverse()); //ordena las palabras de manera invertida

