function calcularTotalIva(){ //para dar la orden
let precio = document.getElementById("precioBase").value; // el lugar donde el usuario escribio el precio base//
let iva = document.getElementById("porcentajeIva").value; //Lugar del porcentaje del IVA//
//para calcular el total es precio por iva dividido entre 100//
let montoIva= precio * iva/100;
//sumando todo para da con el precio final seria
let total = Number(precio) + montoIva;
document.getElementById("resultadoIva").innerText = total;
}

//  Ejercicio 2: Area y perimetro

function calcularCuadrado(){
    let lado = document.getElementById("ladoCuadrado").value; //buscar con el id
    let area = lado * lado; //el area del cuadrado se multiplica por si mismo (lado)
    let perimetro = lado * 4;
    document.getElementById("resultadoArea").innerText = "El area es "  + area;
    document.getElementById("resultadoPerimetro").innerText = "El perimetro es " + perimetro; //llamamos y mostramos
}
 
// Ejercicio 2: Unidades y decenas

