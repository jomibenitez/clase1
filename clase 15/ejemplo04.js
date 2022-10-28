function todoslosParrafos(){
const allparrafos = document.getElementsByTagName("p");
const num = allparrafos.length;
alert(`Hay ${num} elementos p en este documento.`);
}
function parrafosCaja1(){
    const caja1 = document.getElementById('caja1');
    const caja1parrafos = caja1.getElementsByTagName("p");
    const num = caja1parrafos.length;
    alert(`Hay ${num} elementos p en este documento.`);
}
function parrafosCaja2(){
    const caja2parrafos = document.querySelectorAll('#caja2 p');
    const num = caja2parrafos.length;
    alert(`Hay ${num} elementos p en este documento.`);
}