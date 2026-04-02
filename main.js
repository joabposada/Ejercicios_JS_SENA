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
 
// Ejercicio 3: Unidades y decenas

function calcularDigitos(){
    let numero = document.getElementById("numeroIngresar").value;
    let unidades = numero % 10; //%Calcula lo que sobra 
    let decenas = (numero - unidades) /10; //reste la unidad original y lo dividi entre 10
    document.getElementById("Unidad").innerText = "La unidad del numero es "  + unidades;
    document.getElementById("decena").innerText = "La decena del numero es " + decenas;
}

//Ejercicio 4: Cocina

function calcularCantidad(){
    let invitados = document.getElementById("numeroInvitados").value;
    let patatasTotal = invitados * 200;
    let kilospatatas = patatasTotal / 1000; //pasarlo a kilos para los huevos y cebolla
    let huevosTotal = kilospatatas * 5;
    let cebollaTotal = kilospatatas * 300;
    document.getElementById("gramospatata").innerText = "Cantidad de patatas son "  + patatasTotal;
    document.getElementById("cantidadhuevos").innerText = "Cantidad de huevos son " + huevosTotal;
    document.getElementById("gramoscebolla").innerText = "Cantidad de cebolla es "  + cebollaTotal;
}

//Ejercicio 5: Numero aleatorio
//se hace antes para que no se borre los datos por la funcion
Math.random() //genera numeros aleatorios
let numeroSecreto = Math.floor(Math.random() * 101); //math.floor redondea hacoa abajo
let intentosRegresivos = 15;
let listaNumeros = [] //guarda los numeros
function numeroAleatorio(){
    if (intentosRegresivos<=0){ //Para parar y que no continue en negativo
        alert("Juego terminado, no te quedan intentos");
        return;
    }
    let numero = Number(document.getElementById("numeroIngresado").value); //para comparar bien con un numero, hay que especificarlo
    intentosRegresivos = intentosRegresivos-1; //al tenerla ya antes, simplemente le restamos
    document.getElementById("intentosRestantes").innerText = "Intentos restantes: "  + intentosRegresivos;
    listaNumeros.push(numero);//para meter un nuevo elemento en la lista usamos push
    if (numero > numeroSecreto) {
        document.getElementById("pista").innerText = "El numero es menor " 
    }else if (numero<numeroSecreto){
        document.getElementById("pista").innerText = "El numero  es mayor "
    }else {
        document.getElementById("pista").innerText = "Felicidades "
    }
     document.getElementById("lista").innerText = "numeros ingresados:  " + listaNumeros;
}

//Ejercicio 6: Fibonacci

//Fibonacci es una serie infinita de números donde cada término se obtiene sumando los dos anteriores.
//formula: fn=fn-1 +fn-2
function Fibonacci(){
    let cantidad = Number(document.getElementById("numeroInicial").value);
    let serie = [0,1] 
}




