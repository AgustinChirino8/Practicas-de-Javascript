//------------------------- OBTENCION DE LAS VARIABLES ----------------------//

const Boton1 = document.getElementById("Boton1")
const Boton2 = document.getElementById("Boton2")
const input1 = document.getElementById("input")

const form = document.getElementById("idForm")

//----------------------------------------- CONSTRUCTOR DEL ARRAY ----------------------------------------- //
class Users {
    constructor(username , email , password , option) {
        this.username = username
        this.email = email
        this.password = password
        this.option = option
    }
}
//------------------------------------------- ARRAY ------------------------------------------------------- //
const followers = []


const simulation1 = document.getElementById("simulacion1")
const botonUsers = document.getElementById("botonUsers")


//------------------------------------------ EVENTO INGRESO DE DATOS ------------------------------------------ //


form.addEventListener('submit' , (event) => { //SE CARGAN LOS DATOS , PARA LUEGO EXTRAERLOS 
    event.preventDefault()//
    let username = document.getElementById("InputName").value
    let email = document.getElementById("InputEmail").value
    let password = document.getElementById("InputPassword").value
    let persona = new Users (username , email , option)
    followers.push(persona)//NUEVO USUARIO CARGADO AL ARRAY
    localStorage.setItem('usuarios' , JSON.stringify(followers));
    form.reset()
})




const botonSimulator = document.getElementById("botonSimulator")


// -------------------------------------------- logica -------------------------------------------- //

const simButton = document.getElementById ('simButton')
const option1 = document.getElementById('turnoCheck').value = 1
const option2 = document.getElementById('divisasCheck').value = 2
const option3 = document.getElementById('cuotasCheck').value= 3
const formSim = document.getElementById('formSim')

let turno = 1

//VARIABLES PORCENTAJE DE INTERES
   
let cuota3 = 0.1;
let cuota6 = 0.18;
let cuota9 = 0.25;
let cuota12 = 0.40;
let totalFinanciado


//VARIABLES DE DIVISAS

const divDolar = document.getElementById('divDolar')

fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, blue, mep, ccb, ccl}) => {
        divDolar.innerHTML = ""
        divDolar.innerHTML +=`
           <div>
           <h2 class="pb-5 text-center">Cotizaciones del Dolar</h2>
             <table class="table table-dark table-striped p-5">
                <thead>
                 <tr>
                   <th scope="col">Oficial</th>
                   <th scope="col">Blue</th>
                   <th scope="col">CCB</th>
               </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>${oficial}</td>
                   <td>${blue}</td>
                   <td>${ccb}</td>
                 </tr>
                 <tr>
                   <th>Solidario</td>
                   <th>MEP</th>
                   <th>CCL</th>
                 </tr>
                 <tr>
                   <td>${solidario}</td>
                   <td>${mep}</td>
                   <td>${ccl}</td>
                 </tr>
               </tbody>
             </table>
           </div>
        `
    })

setInterval(() => {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, blue, mep, ccb, ccl}) => {
        divDolar.innerHTML = ""
        divDolar.innerHTML +=`
           <div>
           <h2 class="pb-5 text-primary">Cotizaciones del Dolar</h2>
             <table class="table table-dark table-striped p-5">
                <thead>
                 <tr>
                   <th scope="col">Oficial</th>
                   <th scope="col">Blue</th>
                   <th scope="col">CCB</th>
               </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>${oficial}</td>
                   <td>${blue}</td>
                   <td>${ccb}</td>
                 </tr>
                 <tr>
                   <th>Solidario</td>
                   <th>MEP</th>
                   <th>CCL</th>
                 </tr>
                 <tr>
                   <td>${solidario}</td>
                   <td>${mep}</td>
                   <td>${ccl}</td>
                 </tr>
               </tbody>
             </table>
           </div>
        `
    })
},20000)


const dolar = 125.96;
const euro = 131.42;
const libra =640.14;
const chileno = 7;
let moneda
let monto


const simulation2 = document.getElementById('simulacion2')


//------------------------------------------ FUNCIONES ----------------------------------------------//


function divisas(){//------------------- SIMULACION DE CAMBIO DIVISAS ----------------------------//
    simulation2.innerHTML = "" //Para que no aparezca 2 veces
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
    `//------ SELECCION DE MONEDA A CAMBIAR 
    const result1button = document.getElementById('result1Button')
    result1button.addEventListener('click' , () =>{
        const instruccion3 = document.querySelector('input[name="divBottom"]:checked').value;
        if (instruccion3 == 1){//---- CONDICIONAL PARA EL CAMBIO DE VALOR
            let moneda =((monto.value*1)/dolar);//  OPCION 1
            simulation2.innerHTML += `
                <div class="pt-5">
                    <h3>El valor total es de ${moneda.toFixed(2)} dolares</h3>
                </div>
            `
        }else if (instruccion3 == 2){
            let moneda =((monto.value*1)/euro);//  OPCION 2
            simulation2.innerHTML += `
                <div class="pt-5">
                    <h3>El valor total es de ${moneda.toFixed(2)} euros</h3>
                </div>
            `
        }else if (instruccion3 == 3){
            let moneda =((monto.value*1)/libra);// OPCION 3
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




function pagos (){//---------------------------------- FUNCION DE PAGOS EN CUOTAS ----------------------------//
    simulation3.innerHTML = "";
    simulation3.innerHTML += `
    <label type="number"  for="exampleInputName" class="form-label fs-4"> Number </label>
    <input type="number" name="dues"  class="form-control" id="inputNumber2">
    <div class="pt-5">
        <button id="sim3Button" type="submit" class="btn btn-primary">Next</button>
    </div>
    `// INGRESO DEL VALOR (EN NUMEROS) 
    const sim3Button = document.getElementById('sim3Button')
    let valor = document.getElementById("inputNumber2")
    console.log(valor)
    sim3Button.addEventListener ('click' , () =>{//--------- EVENTO DE  SELECCION DE CUOTAS
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
    result2Button.addEventListener('click', () =>{//----------- EVENTO CALCULO MATEMATICO DE LAS CUOTAS
       const instruccion4 = document.querySelector('input[name="duesBottom"]:checked').value;
          if (instruccion4 == 1){//--------------------------- OPCION 1
              let totalFinanciado = (valor.value*cuota3)
              let totalCuotas = totalFinanciado + parseFloat(valor.value)
                simulation3.innerHTML += `
                   <div class="pt-5">
                     <h3>El valor de las cuotas es de ${(totalCuotas /3).toFixed(2)} mensuales </h3>
                   </div>
                `
           }else if(instruccion4 == 2){//------------------------ OPCION 2
              let totalFinanciado = (valor.value*cuota6)
              let totalCuotas = totalFinanciado + parseFloat(valor.value)
                simulation3.innerHTML += `
                   <div class="pt-5">
                     <h3>El valor de las cuotas es de ${(totalCuotas/6).toFixed(2)} mensuales </h3>
                   </div>
                `
           }else if(instruccion4 == 3){//-------------------------- OPCION 3
            let totalFinanciado = (valor.value*cuota9)
            let totalCuotas = totalFinanciado + parseFloat(valor.value)
              simulation3.innerHTML += `
                 <div class="pt-5">
                   <h3>El valor de las cuotas es de ${(totalCuotas/9).toFixed(2)} mensuales </h3>
                 </div>
              `
           }else if(instruccion4 == 4){//-------------------------- OPCION 4
            let totalFinanciado = (valor.value*cuota12)
            let totalCuotas = totalFinanciado + parseFloat(valor.value)
              simulation3.innerHTML += `
                 <div class="pt-5">
                   <h3>El valor de las cuotas es de ${(totalCuotas/12).toFixed(2)} mensuales </h3>
                 </div>
              `
           }
       })
   })
}

//--------------------------------------------------- BOTONES DE VACIO DE LOS DIVS ------------------------------ //



const cleanButtom = document.getElementById('cleanButtom')
const cleanDiv = document.getElementById('cleanDiv')
//  const endButtom = document.getElementById('endButtom')



//------------------------------------------------------ EVENTO DE LAS SIMULACIONES ----------------------------- //



formSim.addEventListener ('submit' , (event) => {
    event.preventDefault() // ----------------------------- 1ERO SE CARGAN LOS DATOS
    let username = document.getElementById("InputName").value
    let email = document.getElementById("InputEmail").value
    let password = document.getElementById("InputPassword").value
    option = document.querySelector('input[name="optionBottom"]:checked').value; // --------------- SELECCIONAMOS LA SIMULACIONA A REALIZAR
    console.log(followers)
    form.reset()
    if (option === option1){ //-------------------------- GESTION DE TURNO 
        const losUsuarios = Users => Users.option === 1
        for(Users of followers){
            simulation1.innerHTML += `
                <div id="simulacion1" class="div-Padre">
                    <p>Solicitud de turno aceptado!</p>
                    <p>Nombre : ${Users.username}
                    <p>Turno N°: ${turno++}
                </div>
            `
        };
    }else if(option == option2){//------------------------- CAMBIO DE DIVISAS
        divisas();
    }else if(option == option3){//------------------------- PAGO EN CUOTAS
        pagos();
    }
    let persona = new Users(username , email , password , option) //-------------- SE PUSHEA EL USUARIO AL ARRAY
    followers.push(persona)
    localStorage.setItem('usuarios' , JSON.stringify(persona.username));// ---- GUARDAMOS LOS DATOS INGRESADOS AL LOCALSTORAGE
    localStorage.setItem('mail', JSON.stringify(persona.email))
    localStorage.setItem('opcion', JSON.stringify(persona.option))
    formSim.reset()// --------------- RESETEAMOS EL FORMULARIO PARA CARGAR NUEVOS DATOS
    cleanButtom.addEventListener('click', ()=>{//--------- BORRAMOS LOS EVENTOS DE LAS SIMULACIONES PARA EMPEZAR DE NUEVO
        simulation1.innerHTML =``
        simulation2.innerHTML =``
        simulation3.innerHTML = ``
        const history = JSON.parse(localStorage.getItem('usuarios'))// ------------ OBTENEMOS LOS VALORES INGRESADOS AL LOCALSTORAGE
        const mail = JSON.parse(localStorage.getItem('mail'))
        const passw = JSON.parse(localStorage.getItem('opcion'))
        console.log(history , mail , passw)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Simulacion Finalizada',
            showConfirmButton: false,
            timer: 1500
          })
    })
})


   
    


