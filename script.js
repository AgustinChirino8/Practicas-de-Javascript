const resumen = [];


let nombre =prompt(" BIENVENIDO A HOUSEBANK     Por Favor  Ingrese Nombre y Apellido");

let instruccion = parseFloat(prompt("POR FAVOR SR.   "      + nombre +        "     SELECCIONE LA OPCION A REALIZAR:         1)   SOLICITUD DE TURNOS;"  + ""  +   "       2)   SIMULACION DE CAMBIO DE VALORES;" +""+  "      3)   SIMULACION DE PAGO EN CUOTAS;"  + "" + "      4)SALIR;"));


let turno = 1;



/*class resumen {
    constructor(turno , nombre ){
        this.id = turno;
        thiss.nombre = 
    }
}
*/

//const resumen = [nombre, instruccion,];



//VARIABLES PORCENTAJE DE INTERES

let cuota3 = (10/100);

let cuota6 = (18/100);

let cuota9 = (25/100);

let cuota12 = (40/100);

let totalFinanciado


//VARIABLES DE DIVISAS


const dolar = 125.96;
const euro = 131.42;
const libra =640.14;
const chileno = 7;

let monto;


let moneda ;
//------------------------------------------------ ARRAYS ----------------------------------------------//






//-------------------------------------------------- FUNCIONES------------------------------------------//



function divisas(){
    let monto = parseFloat(prompt("Ingrese monto"));
            let instruccion3=prompt("INGRESE MONEDA DESEADA: (1) DOLAR; (2) EURO;  (3) LIBRA;  (4) PESO CHILENO");
           switch(instruccion3){               
                case "1":
                    moneda =((monto*1)/dolar);
                    alert(`Valor total es de ` + moneda.toFixed(2) +" dolares");
                    break;
                case "2":
                    moneda =((monto*1)/euro);
                    alert(`Valor total es de ` + moneda.toFixed(2) +" euros");
                    break;
                case "3":
                    moneda =((monto*1)/libra);
                    alert(`Valor total es de ` + moneda.toFixed(2) +" libras");
                    break;
                case "4":
                    moneda =((monto*1)/chileno);
                    alert(`Valor total es de ` + moneda.toFixed(2) +" pesos chilenos");
                    break;
                default: alert("Por favor, ingrese una divisa valida.");
                    break;
            }
}

//--------------------------------------------------- PRUEBAS ---------------------------------------------------------//





while(instruccion!=4){
    switch(instruccion){// MENU DE NAVEGACION
        case 1:// OPCION Nº 1
            alert("SOLICITUD DE TURNO ACEPTADO");
            alert("Turno Nª "  + turno++ +  "\nNombre:" +  nombre );
            break;
        case 2: // OPCION Nº 2 + CALCULO DE DIVISAS 
            divisas();
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
    resumen.push(nombre , instruccion);
    console.log(resumen)
    nombre =prompt(" BIENVENIDO A HOUSEBANK     Por Favor  Ingrese Nombre y Apellido");
    instruccion= parseFloat(prompt("POR FAVOR SR.   "      + nombre +        "     SELECCIONE LA OPCION A REALIZAR:         1)   SOLICITUD DE TURNOS;"  + ""  +   "       2)   SIMULACION DE CAMBIO DE VALORES;" +""+  "      3)   SIMULACION DE PAGO EN CUOTAS;"  + "" + "      4)SALIR;"));
}





