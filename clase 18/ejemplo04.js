function getNombreDiasForMes(mes) {
    
    if(Number.isNaN(mes)) return false; //si o si tienes que ser numerico

    if(mes <1 || mes >12) return false; //mes tiene que estar entre 1 y 12

    mes--;

    const data = [
        {
            nombre: 'Enero', dias: 31
        }
        {
            nombre: 'Febrero', dias: 28
        }
        {
            nombre: 'Marzo', dias: 30
        }
        {
            nombre: 'Abril', dias: 31
        }
        {
            nombre: 'Mayo', dias: 30
        }
        {
            nombre: 'Junio', dias: 31
        }
        {
            nombre: 'Julio', dias: 30
        }
        {
            nombre: 'Agosto', dias: 31
        }
        {
            nombre: 'Septiembre', dias: 30
        }
        {
            nombre: 'Octubre', dias: 31
        }
        {
            nombre: 'Noviembre', dias: 30
        }
        {
            nombre: 'Diciembre', dias: 31
        }
    ]
    return data[mes];
}

const numMes = parseInt(prompt('Ingrese el mes del año',''));
const resultado = getNombreDiasForMes(numMes);

if (resultado){
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias}`)
} else {
    alert ('Mes invalido');
}






