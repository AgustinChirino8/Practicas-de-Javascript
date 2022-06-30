/*
var nombre = "agustin" //texto
var apellido = "chirino" //texto
var sueldo = 84000 //numero
var esEmpleado = true //Boolean o Logicas
var esPropietario = null // null o Vacio
var esPadre = undefined //no se sabe que tipo de dato pero no es lo mismo que null
let alerta = "arrivaos chavales"
*/
// NO SE UTILIZARA VAR EN EL CURSO - LET SI//

/*console .log(nombre)
var concatenacion = nombre + " " + apellido;
var datos = document.getElementById("datos");
datos.innerHTML = `
   <h1>hola gente , mi nombre es ${nombre} ${apellido}</h1>
   <p>actualmente estoy practicando con javascript</p>
   <h2>no se como termine aca</h2>
   <h3>pero debo decir...</h3>
   <p>que estoy ansioso por lo que se viene</p>
`;

/*
if (sueldo >=85000){
    datos.innerHTML += `
        <h1>pretendo cobrar mas</h1>
    `
}else{
    datos.innerHTML += `
        <h1>no es lo optimo</h1>
    `
}
for ( var i= 90 ; i<=100 ;  i++){
    datos.innerHTML += `
        <h1>estamos en el año:</h1>`+i;
}
*/
/*
var concatenacion = nombre + " " + apellido;

function muestraMiNombre(nombre , apellido){
    var misDatos= `
   <h1>hola gente , mi nombre es ${nombre} ${apellido}</h1>
   <p>actualmente estoy practicando con javascript</p>
   <h2>no se como termine aca</h2>
   <h3>pero debo decir...</h3>
   <p>que estoy ansioso por lo que se viene</p>
   `;
   return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre(Agustin , Chirino);    
}

imprimir();

*/
/*
let desayuno = prompt ("ingrese su desayuno").toLowerCase(); //es una afirmacion

if(desayuno == "cafe") {    // es una consulta
    console.log("desayuno cafe cortado");
}else if(desayuno== "te"){
    console.log("desayuno te con leche");
}else if(desayuno== "chocolatada"){
    console.log("desayuno chocolatada");
}else{
    console.log("no desayuno")
}
*/

/*
let edad = prompt("ingrese su edad");


if(edad <=8 && edad >= 1 ){
    alert ("Esta atravezando la etapa de la infancia");
}else if ( edad > 9 && edad <= 11 ){
    alert("Esta atravezando la etapa de la niñez");
}else if (edad >=12 && edad <=19){
    alert ("Esta atravezando la etapa de la adolescencia");
}else if (edad > 13 && edad <= 25 ){
    alert ("Esta atravezando la etapa de la Juventud");
}else if ( edad > 25 && edad <=65){
    alert ("Esta atravezando la etapa de la Adultez");
}else if (edad > 66){
    alert ("Esta atravezando la etapa de la Ancienidad");
}else if(edad ==""){
    console.log("Edad no ingresada");
}
*/


let nombre =prompt(" BIENVENIDO A HOUSEBANK     Por Favor  Ingrese Nombre y Apellido");

let instruccion = parseFloat(prompt("POR FAVOR SR.   "      + nombre +        "     SELECCIONE LA OPCION A REALIZAR:         1)   SOLICITUD DE TURNOS;"  + ""  +   "       2)   CANCELACION DE TURNOS;" +""+  "      3)   SIMULACION DE PAGO EN CUOTAS;"  + "" + "      4)SALIR;"));

let turno = 1;

// OPCIONES DE LA NAVEGACION

let opcion1 = 1;

let opcion2 = 2;

let opcion3 = 3;

let opcion4 = 4;

//VARIABLES PORCENTAJE DE INTERES

let cuota3 = (10/100);

let cuota6 = (18/100);

let cuota9 = (25/100);

let cuota12 = (40/100);

let totalFinanciado

while(instruccion!=4){

    switch(instruccion){// MENU DE NAVEGACION

        case 1:// OPCION Nº 1

            alert("SOLICITUD DE TURNO ACEPTADO");

            alert("Turno Nª "  + turno++ +  "\nNombre:" +  nombre );

            break;

        case 2: // OPCION Nº 2

            alert("TURNO CANCELADO SATISFACTORIAMENTE");

            break;

        case 3:// OPCION Nº 3 + CALCULO DE CUOTAS

            let cuota = parseFloat(prompt("Ingrese monto"));

            let instruccion2=prompt("INGRESE NUMERO DE CUOTAS: (3) CUOTAS; (6) CUOTAS;  (9) CUOTAS;  (12) CUOTAS");

           switch(instruccion2){               

                case "3":

                    totalFinanciado =((cuota*cuota3) +cuota);

                    alert(`Valor de la cuota $${(totalFinanciado/3).toFixed(2)}, x 3 meses`);

                    break;

                case "6":

                    totalFinanciado =((cuota*cuota6) +cuota);

                    alert(`Valor de la cuota $${(totalFinanciado/6).toFixed(2)}, x 6 meses`);

                    break;

                case "9":

                    totalFinanciado =((cuota*cuota9) +cuota);

                    alert(`Valor de la cuota $${(totalFinanciado/9).toFixed(2)}, x 9 meses`);

                    break;

                case "12":

                    totalFinanciado =((cuota*cuota12) +cuota);

                    alert(`Valor de la cuota $${(totalFinanciado/12).toFixed(2)}, x 12 meses`);

                    break;

                default: alert("Por favor, ingrese un número de cuotas valido.");

                    break;

            }

            break;

        default:

            alert("Por favor ingrese un número válido")

            break;

    }

    nombre =prompt(" BIENVENIDO A HOUSEBANK     Por Favor  Ingrese Nombre y Apellido");

    instruccion= parseFloat(prompt("POR FAVOR SR.   "      + nombre +        "     SELECCIONE LA OPCION A REALIZAR:         1)   SOLICITUD DE TURNOS;"  + ""  +   "       2)   CANCELACION DE TURNOS;" +""+  "      3)   SIMULACION DE PAGO EN CUOTAS;"  + "" + "      4)SALIR;"));

}