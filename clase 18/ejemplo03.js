const empleados = [
    { nombre: 'Flavia', trabajo: 'desarrollador'},
    { nombre: 'José', trabajo: 'desarrollador'},
    { nombre: 'Maria', trabajo: 'Enfermera'},
    { nombre: 'Fernanda', trabajo: 'doctora'},
    { nombre: 'Felipe', trabajo: 'desarrollador'},
    { nombre: 'Marcos', trabajo: 'abogado'},
];

const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)
const noDesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)
console.log(desarrollador)
console.log(noDesarrollador)

