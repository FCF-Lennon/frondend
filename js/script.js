
// variable que guardara el array de objetos que contiene los datos del formulario  fuera de la funcion guardar para que no se repita en cada llamada de la funcion guardar.
let mensajes = []

// funcion con formato flecha =>
let guardar = () => {

    // declaramos variables para los elementos del formulario segun el id

    let firts_name = document.getElementById("name") // creamos la variable para referenciar en ella el elemento input con id name del documento html
    let last_name = document.getElementById("last_name")
    let message = document.getElementById("message")

    // declaramos variables para los errores del formulario
    let error_name = document.getElementById("error_name") // creamos la variable para referenciar en ella el elemento div con id error_name del documento html
    let error_last_name = document.getElementById("error_last_name")
    let error_message = document.getElementById("error_message")

    // para validar que los campos no esten vacios crearemos una condicion if

    if (existsErrors(
            firts_name, last_name, message,
            error_name, error_last_name, error_message
        )
    ) {
        // Logica en caso de que existan errores
    } else {
        // Forma alternativa de declarar objetos
        // let objeto = new Object()
        // objeto.nombre = name.value
        // objeto.apellido =  last_name.value
        // objeto.message = message.value

        // creamos una variable para almacenar el objeto que contiene los datos del formulario
        let objeto = {
            nombre: firts_name.value,
            apellido: last_name.value,
            message: message.value
        }

        // creamos una variable para almacenar el array que contiene los objetos que contiene los datos del formulario
        // fuera de la funcion guardar para que no se repita en cada llamada de la funcion guardar.

        mensajes.push(objeto) // agregamos el objeto al array mensajes que contiene los datos del formulario (como append en python)
        console.log(mensajes) // imprimimos el array mensajes que contiene los datos del formulario por consola

        let elemento_response = document.getElementById("tablebody") // capturamos el dato almacenado en el div con id response (como el getter en python)
        let row = "<tr><td>"+objeto.nombre+"</td><td>"+objeto.apellido+"</td><td>"+objeto.message+"</td></tr>" // creamos una variable para almacenar el html que contiene el objeto que contiene los datos del formulario
        
        var addRow = document.createElement("TR") // creamos una variable que referencia al elemento TR que se creara en el html
        addRow.innerHTML = row // con innerHTML agregamos las filas al elemento TR del html en la tabla
        elemento_response.appendChild(addRow) // agregamos el elemento TR al elemento response del html

        firts_name.value = "" // limpiamos los campos del formulario
        last_name.value = ""  // limpiamos los campos del formulario
        message.value = "" // limpiamos los campos del formulario
        
    }   
}


// funcion con formato normal

function existsErrors(firts_name, last_name, message, error_name, error_last_name, error_message) {
    
    let errors = [] // creamos una variable de tipo array para almacenar los mensaje de error

    // creamos condicion if para validar que los campos no esten vacios

    if (firts_name.value == "") {
        errors.push("Debe ingresar el nombre") // agregamos el mensaje de error al array errors
        error_name.innerHTML = "Debe ingresar su nombre." // con innerHTML agregamos el mensaje de error al div con id error_name
        error_name.classList.remove("escondido") // con classList.remove() quitamos la clase escondido del div con id error_name para que se muestre el mensaje de error
    }else {
        error_name.classList.add("escondido") // con classList.add() agregamos la clase escondido al div con id error_name para que se oculte el mensaje de error
    }

    if (last_name.value == "") {
        errors.push("Debe ingresar el apellido") 
        error_last_name.innerHTML = "Debe ingresar su apellido."
        error_last_name.classList.remove("escondido")
    }
    else {
        error_last_name.classList.add("escondido")
    }

    if (message.value == "") {
        errors.push("Debe ingresar un mensaje")
        error_message.innerHTML = "Debe ingresar un mensaje."
        error_message.classList.remove("escondido")
    }else {
        error_message.classList.add("escondido")
    }

    // si existen errores, mostramos el mensaje de error en el div con id error_form
    errors.forEach(error => {
        console.log(error)
    }
    );

    // creamos una condicion if para validar que no existan errores en el formulario 
    // si existen errores, retornamos true, si no existen errores, retornamos false
    // para que la funcion guardar sepa si existen errores o no.

    if (errors.length > 0) {
        return true
    }else {
        return false
    }
}