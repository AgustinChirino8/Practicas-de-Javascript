const Boton1 = document.getElementById("Boton1")
const Boton2 = document.getElementById("Boton2")
const input1 = document.getElementById("input")

const form = document.getElementById("idForm")

class users {
    constructor(username , email , password) {
        this.username = username
        this.email = email
        this.password = password
    }
}

const followers = []
const divUsers = document.getElementById("divUsers")
const botonUsers = document.getElementById("botonUsers")

form.addEventListener('submit' , (event) => {
    event.preventDefault()
    let username = document.getElementById("InputName").value
    let email = document.getElementById("InputEmail").value
    let password = document.getElementById("InputPassword").value
    const user = new users (username , email , password)
    followers.push(user)
    localStorage.setItem('usuarios' , JSON.stringify(followers));
    console.log(followers)
    form.reset()
})



botonUsers.addEventListener('click' , () => {
    followers.forEach(user => {
        divUsers.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${user.username}</h5>
                <h5 class="card-title">${user.email}</h5>
                <p class="card-text"></p>
            </div>
        </div>
        `
    })
})

const botonSimulator = document.getElementById("botonSimulator")

botonSimulator.addEventListener('click' , () => {
    location.href="Simulador.html"
})

