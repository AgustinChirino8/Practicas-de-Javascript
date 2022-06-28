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

let nombre =prompt("ingrese nombre");
let instruccion =prompt("POR FAVOR,SELECCIONE LA OPCION A REALIZAR:         1)   SOLICITUD DE TURNOS;"  + ""  +   "       2)   CANCELACION DE TURNOS;" +""+  "      3)   SIMULACION DE PLAZO FIJO;"  + "" + "      4)SALIR;");
let opcion1 = 1;
let opcion2 = 2;
let opcion3 = 3;
let cuota1=1;
let cuota2=2;
let cuota3=9;
let cuota4=12;
let plan1= (10%100);

while(instruccion){
    if(instruccion ==opcion1){
        alert("SOLICITUD DE TURNO ACEPTADO");
        for(let i = 1;  i <=20 ; i++){
            alert("Turno Nª" + i + "Nombre:" + nombre );
            break;
        }
        break;
    }else if(instruccion == opcion2 ){
        alert("TURNO ANULADO SATISFACTORIAMENTE");
    }else if(instruccion == opcion3){
        let cuota=prompt("INGRESE MONTO");
        let instruccion2=prompt("INGRESE CUOTAS A SIMULAR: 1) 3 CUOTAS  ; 2)  6 CUOTAS   ;  3) 9  CUOTAS   ;   4) 12  CUOTAS");
        if(instruccion2==cuota1){
           alert("holi");
        }
        break;
    }
}


