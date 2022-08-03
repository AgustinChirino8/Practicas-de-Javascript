/*class Tarea {
    constructor(nombre , descripcion , estado) {
        this.nombre = nombre
        this.descripcion = nombre
        this.estado = estado
    }
}

let tareas = []

if (localStorage.getItem ('tareas')){
    tareas = JSON.parse(localStorage.getItem('tareas'))
}else{
    localStorage.setItem('tareas', JSON.stringify(tareas))
}
*/ 

/*

//----------------------------------------------   SIMULADOR CON PROMPTS Y ALERTS ------------------------------//


Boton1.addEventListener("click",() => {
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
    Boton2.onclick = () =>{
       let historial =parseFloat(prompt("desea ver el historial de los usuarios que ingresaron? \n1)SI \n2)NO"));
       let miHistorial = document.getElementById("Registro")
       console.log(resumen)
       if (historial ==1){
           let opciones =parseFloat(prompt("Seleccione Historial de Busqueda. \n1)Usuarios que Solicitaron Turnos. \n2)Usuarios que Cambiaron divisas. \n3)Usuarios que simularon pagos en cuota"))
           if (opciones === 1){
               const losUsuarios = Usuario => Usuario.instruccion === 1
               for(Usuario of resumen){
                   miHistorial.innerHTML += `
                       <div class="div-Padre">
                           <p>${Usuario.nombre}</p>
                       </div>
                   `
               };
           }
      }
   }
   })

   */



const simButton = document.getElementById ('simButton')
const option1 = document.getElementById('turnoCheck').value = 1
const option2 = document.getElementById('divisasCheck').value = 2
const option3 = document.getElementById('cuotasCheck').value= 3
const formSim = document.getElementById('formSim')


class SimUsers {
    constructor (nombre , options) {
        this.nombre = nombre;
        this.options = options;
    }
}

const persons = []
let turno = 1

//VARIABLES PORCENTAJE DE INTERES
   
let cuota3 = 0.1;
let cuota6 = 0.18;
let cuota9 = 0.25;
let cuota12 = 0.40;
let totalFinanciado


//VARIABLES DE DIVISAS

const dolar = 125.96;
const euro = 131.42;
const libra =640.14;
const chileno = 7;
let moneda
let monto



const simulation2 = document.getElementById('simulacion2')


//------------------------------------------ FUNCIONES ----------------------------------------------//


function divisas(){
    simulation2.innerHTML += `
        <label type="radio"  for="exampleInputName" class="form-label fs-4"> Number </label>
        <input type="number"   name="money" class="form-control" id="inputNumber">
        <div class="pt-5">
            <button id="sim2Button" type="submit" class="btn btn-primary">Next step</button>
        </div>
        
    `
    let monto = document.getElementById('inputNumber')
    const sim2Button = document.getElementById('sim2Button')
    sim2Button.addEventListener ('click' , () =>{
        simulation2.innerHTML += `
            <h2 class="pt-5" >Por favos a continuacion seleccione la moneda a cambiar </h2>
            <div class="mb-3 form-check">
                <input type="radio"   value= 1 name="divBottom" class="form-check-input fs-4" id="Dolar">
                <label class="form-check-label text-primary fs-3" for="exampleCheck1"> a Dolar</label>
            </div>
            <div class="mb-3 form-check">
                <input type="radio" value= 2 name="divBottom" class="form-check-input fs-4" id="Euro">
                <label class="form-check-label text-primary fs-3" for="exampleCheck1">a Euro</label>
            </div>
            <div class="mb-3 form-check pb-lg-5">
                <input type="radio" value= 3 name="divBottom" class="form-check-input fs-4" id="Libra">
                <label class="form-check-label text-primary fs-3" for="exampleCheck1">a Libra</label>
            </div>
            <button id="result1Button" type="submit" class="btn btn-primary"> Get Results </button>
    `
    const result1button = document.getElementById('result1Button')
    result1button.addEventListener('click' , () =>{
        const instruccion3 = document.querySelector('input[name="divBottom"]:checked').value;
        if (instruccion3 == 1){
            let moneda =((monto.value*1)/dolar);
            simulation2.innerHTML += `
                <div class="pt-5">
                    <h3>El valor total es de ${moneda.toFixed(2)} dolares</h3>
                </div>
            `
        }else if (instruccion3 == 2){
            let moneda =((monto.value*1)/euro);
            simulation2.innerHTML += `
                <div class="pt-5">
                    <h3>El valor total es de ${moneda.toFixed(2)} euros</h3>
                </div>
            `
        }else if (instruccion3 == 3){
            let moneda =((monto.value*1)/libra);
            simulation2.innerHTML += `
                <div class="pt-5">
                    <h3>El valor total es de ${moneda.toFixed(2)} libras</h3>
                </div>
            `
        }
    })
    })
}

const simulation3 = document.getElementById('simulacion3')
function pagos (){
    simulation3.innerHTML += `
    <label type="radio"  for="exampleInputName" class="form-label fs-4"> Number </label>
    <input type="number" name=dues  class="form-control" id="inputNumber2">
    <div class="pt-5">
        <button id="sim3Button" type="submit" class="btn btn-primary">Next</button>
    </div>
    `
    let valor =document.getElementById('inputNumber2')
    const sim3Button = document.getElementById('sim3Button')
    sim3Button.addEventListener ('click' , () =>{
        simulation3.innerHTML += `
            <h2 class="pt-5" >Por favos a continuacion seleccione la cantidad de cuotas a pagar </h2>
            <div class="mb-3 form-check">
                <input type="radio"   value= 1 name="duesBottom" class="form-check-input fs-4" id="3 cuotas">
                <label class="form-check-label text-primary fs-3" for="exampleCheck1"> 3 cuotas</label>
            </div>
            <div class="mb-3 form-check">
                <input type="radio" value= 2 name="duesBottom" class="form-check-input fs-4" id="6 cuotas">
                <label class="form-check-label text-primary fs-3" for="exampleCheck1">6 cuotas</label>
            </div>
            <div class="mb-3 form-check">
                <input type="radio" value= 3 name="duesBottom" class="form-check-input fs-4" id="9 cuotas">
                <label class="form-check-label text-primary fs-3" for="exampleCheck1">9 cuotas</label>
            </div>
            <div class="mb-3 form-check pb-lg-5">
                <input type="radio" value= 4 name="duesBottom" class="form-check-input fs-4" id="12 cuotas">
                <label class="form-check-label text-primary fs-3" for="exampleCheck1">12 cuotas</label>
            </div>
            <button id="resulta2Button" type="submit" class="btn btn-primary"> Get Results </button>
        `
    const result2Button = document.getElementById('resulta2Button')
    result2Button.addEventListener('click', () =>{
       const instruccion4 = document.querySelector('input[name="duesBottom"]:checked').value;
          if (instruccion4 == 1){
              totalFinanciado = (valor.value*cuota3)
              totalCuotas = totalFinanciado + valor.value
                simulation3.innerHTML += `
                   <div class="pt-5">
                     <h3>El valor de las cuotas es de ${(totalCuotas/3).toFixed(2)} mensuales </h3>
                   </div>
                `
           }else if(instruccion4 ==2){
              totalFinanciado = (valor.value*cuota6)
              totalCuotas = totalFinanciado + valor.value
                simulation3.innerHTML += `
                   <div class="pt-5">
                     <h3>El valor de las cuotas es de ${(totalCuotas/6).toFixed(2)} mensuales </h3>
                   </div>
                `
           }else if(instruccion4 ==3){
            totalFinanciado = (valor.value*cuota9)
            totalCuotas = totalFinanciado + valor.value
              simulation3.innerHTML += `
                 <div class="pt-5">
                   <h3>El valor de las cuotas es de ${(totalCuotas/9).toFixed(2)} mensuales </h3>
                 </div>
              `
           }else if(instruccion4 ==4){
            totalFinanciado = (valor.value*cuota12)
            totalCuotas = totalFinanciado + valor.value
              simulation3.innerHTML += `
                 <div class="pt-5">
                   <h3>El valor de las cuotas es de ${(totalCuotas/12).toFixed(2)} mensuales </h3>
                 </div>
              `
           }
       })
   })
}

const cleanButtom = document.getElementById('cleanButtom')
const cleanDiv = document.getElementById('cleanDiv')
const endButtom = document.getElementById('endButtom')


formSim.addEventListener ('submit' , (event) => {
    event.preventDefault()
    let nombre = document.getElementById('inputName').value
    options = document.querySelector('input[name="optionBottom"]:checked').value;
    let newUsers = new SimUsers (nombre , options)
    persons.push(newUsers)
    console.log(persons)
    const simulation1 = document.getElementById('simulacion1')
    if (options == 1){
        const losUsuarios = SimUsers => SimUsers.options === 1
        for(SimUsers of persons){
            simulation1.innerHTML += `
                <div class="div-Padre">
                    <p>Solicitud de turno aceptado!</p>
                    <p>Nombre : ${SimUsers.nombre}
                    <p>Turno N°: ${turno++}
                </div>
            `
        };
    }else if(options == 2){
        divisas();
    }else if(options == 3){
        pagos();
    }
    formSim.reset()
    cleanButtom.addEventListener('click', ()=>{
        simulation1.innerHTML = ``
        simulation2.innerHTML =``
        simulation3.innerHTML = ``
    })
})


