
const resumen = [];
//----------------------------------------------- 1ER INGRESO DE DATOS --------------------------------------------- //
let nombre =prompt(" BIENVENIDO A HOUSEBANK , antes de continuar    Por Favor  Ingrese Nombre y Apellido");
let instruccion = parseFloat(prompt(`POR FAVOR SR. ${nombre} \nSELECCIONE LA OPCION A REALIZAR:\n1)SOLICITUD DE TURNOS\n2)SIMULACION DE CAMBIO DE VALORES\n3)SIMULACION DE PAGO EN CUOTAS\n4)SALIR;`));
let turno = 1;

//------------------------------------------------ ARRAYS ----------------------------------------------//

class Usuario {
    constructor(instruccion , nombre ){
        this.instruccion = instruccion;
        this.nombre =  nombre;
    }
}

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
    resumen.push(new Usuario(instruccion,nombre));

    //----------------------- 2DO INGRESO DE DATOS -------------------------- //


    nombre =prompt(" BIENVENIDO A HOUSEBANK     Por Favor  Ingrese Nombre y Apellido");
    instruccion = parseFloat(prompt(`POR FAVOR SR. ${nombre} \nSELECCIONE LA OPCION A REALIZAR:\n1)SOLICITUD DE TURNOS\n2)SIMULACION DE CAMBIO DE VALORES\n3)SIMULACION DE PAGO EN CUOTAS\n4)SALIR;`));


    // ---------------------- PUSH DEL ARRAY ---------------------------------//
    if(instruccion===4){
        resumen.push(new Usuario(instruccion,nombre));
    }
};



//----------------------------------------------------------  HISTORIAL DE USUARIOS ------------------------------------------------//



let historial =parseFloat(prompt("desea ver el historial de los usuarios que ingresaron? \n1)SI \n2)NO"));

if (historial ==1){
    let opciones =parseFloat(prompt("Seleccione Historial de Busqueda. \n1)Usuarios que Solicitaron Turnos. \n2)Usuarios que Cambiaron divisas. \n3)Usuarios que simularon pagos en cuota"))
    switch (opciones){
        case 1:
            console.log(resumen.filter(Usuario => Usuario.instruccion === 1 ));
            alert("Historial en consola");
            break;
        case 2:
            console.log(resumen.filter(Usuario => Usuario.instruccion === 2 ));
            alert("Historial en consola");
            break;
        case 3:
            console.log(resumen.filter(Usuario => Usuario.instruccion === 3 ));
            alert("Historial en consola");
            break;
        }
}



