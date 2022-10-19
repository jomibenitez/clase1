const nombre = prompt ('Ingrese su nombre','')
const nota = parseInt(prompt('Ingrese su nota',''))
if(Number.isNaN(nota)){
    document.write('La nota es invalida')
}
else if( nota>= 4){
    document.write(`${nombre} estas aprobado con ${nota}`)    
}
else {
    document.write(`${nombre} estas desaprobado con ${nota}.Segui estudiando.`)
}
