const datosUsuarios =[
    {
        nombre: 'Flavia', password:'abc1230'
    },
    {
        nombre: 'Laura', password:'def456'
    },
    {
        nombre: 'Pablo', password:'ghi789'
    },
    {
        nombre: 'Lorena', password:'123kop'
    },
    {
        nombre: 'Virginia', password:'456mnb'
    },
        
]

const soloPassword = datosUsuarios.map(function(p){
    return p.password;
})

console.log(soloPassword);