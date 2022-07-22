class Tarea {
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