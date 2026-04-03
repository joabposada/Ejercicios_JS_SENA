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
    let serie = [0,1] //numero ocupados a iniciar

for (let i = 2; i< cantidad; i++){ // i es un contador y vale a 2


let nuevoNum = serie [i - 1] + serie [i - 2] // siempre dos pasos atras, o sea los busca
serie.push(nuevoNum);
}
document.getElementById("resultado").innerText = serie;

 }

 //Ejercicio 7: Mayor o menor

 function mayoromenor(){
    let num1= Number(document.getElementById("Numero1").value);
    let num2= Number(document.getElementById("Numero2").value);
     if (num1 > num2) {
        document.getElementById("Resultado").innerText = "El primer numero es mayor " 
    }else if (num1<num2){
        document.getElementById("Resultado").innerText = "El primer numero  es menor "
    }else {
        document.getElementById("Resultado").innerText = "son iguales "
    }
}


//Ejercicio 8: Factorial

function factorial(){
    let numero =Number(document.getElementById("numeroFactor").value)
    let resultado = 1 //en multiplicacion nuca usamos 0
    for (let i = 1; i<= numero; i++){
        resultado = resultado * i;

    }
    document.getElementById("respuesta").innerText = resultado;
}

//Ejercicio 9: Multiplos de 6

function multiplo(){
    let num1 = Number(document.getElementById("primerNum").value);
    let num2 = Number(document.getElementById("segundoNum").value);
    let listaMultiplos= [];
     if (num1 > num2) {
        console.log ("Por favor un numero menor primero para hacer la operacion correctamente")
        return;
     }
    for (let i = num1; i<= num2; i++){
        if ( i % 6=== 0) {
            listaMultiplos.push(i)

        }
        

    }
        

    
    document.getElementById("Respuesta").innerText = listaMultiplos;
}

//ejercicio 10: Par e impar

function pareimpar(){
    let elegidos = [];
    let pares = [];
    let impares = [];
    for(let i=0; i<20; i++){
         
        let numerosAzar = Math.floor(Math.random() * 101);
        elegidos.push(numerosAzar)
        if (numerosAzar%2===0){
            pares.push(numerosAzar);
        

        }else {
            impares.push(numerosAzar);
            
        }

        
 }
 document.getElementById("numerosElegidos").innerText = elegidos;
 document.getElementById("par").innerText = "Los pares son: " + pares;
 document.getElementById("impar").innerText = "Los impares son: "+ impares;
}
    //ejercicio 11: multiplos de 3 fuera
    function multiplode3(){
        let originales = [];
        let eliminados = [];
        for (let i=0; i<10; i++){
            let numerosAzarsegundo = Math.floor(Math.random() * 11) + 10; 
            
            originales.push(numerosAzarsegundo); //tener los 10 antes de elminar
             //primero el arreglo y luego el numero
        

        if (numerosAzarsegundo %3 !==0){ //! es negacion
            eliminados.push(numerosAzarsegundo);
        
            
        }
    



        }
    document.getElementById("antes").innerText = "Asi es originalmente: " + originales;
    document.getElementById("resultadoFinal").innerText = "modificado: " + eliminados;
    }



