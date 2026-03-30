function calcularTotalIva(){ //para dar la orden
let precio = document.getElementById("precioBase").value; // el lugar donde el usuario escribio el precio base//
let iva = document.getElementById("porcentajeIva").value; //Lugar del porcentaje del IVA//
//para calcular el total es precio por iva dividido entre 100//
let montoIva= precio * iva/100;
//sumando todo para da con el precio final seria
let total = Number(precio) + montoIva;
document.getElementById("resultadoIva").innerText = total;
}