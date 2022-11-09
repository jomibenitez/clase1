const alumnos = [
    {
        nombre: 'Juan', edad: 10
    },
    {
        nombre: 'flavia', edad: 3
    },
    {
        nombre: 'esteban', edad: 5
    },
    {
        nombre: 'lola', edad: 2
    },
    {
        nombre: 'pepe', edad: 4
    },
    {
        nombre: 'lorenzo', edad: 3
    },
]

const chicos = alumnos.filter(
    alumno => alumno.edad <=4
)

console.log(chicos)

for(let i = 0; i <chicos.length; i++) {
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}.</p>`)
}