const volverAtras = () => {
    //debugger
    const botonVolver = document.querySelector(`#botonVolver`)
    botonVolver.addEventListener('click', () => {
        guardarDatosDeUsr()
        })
}

volverAtras()



const finalizarCompra = () => {
    debugger    
    const botonFin = document.querySelector(`#botonFinalizar`)
    botonFin.addEventListener('click', () => {
        localStorage.clear();
        toastFinDeCompra(`Haz finalizado tu compra!! Pronto nos pondremos en contacto.`)


    })
}

finalizarCompra()


function guardarDatosDeUsr() {
    const datosUsr = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        correo: inputCorreo.value,
        telefono: inputTelefono.value
    }
    let str = JSON.stringify(datosUsr)
    localStorage.setItem("datosUsr", str)
}

function recuperoDatosDeUsr() {
    if (localStorage.getItem("datosUsr")) {
        const datosUsr = JSON.parse(localStorage.getItem("datosUsr"))
        inputNombre.value = datosUsr.nombre
        inputApellido.value = datosUsr.apellido
        inputTelefono.value = datosUsr.telefono
        inputCorreo.value = datosUsr.correo
    }
}

recuperoDatosDeUsr()

//Resaltar campos al completarlos
const focoEnCampos = () => {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", () => campo.className = "form-control hint fondo-inputs")
            campo.addEventListener("blur", () => campo.className = "form-control hint")
        }
    }
}

focoEnCampos()

//TOAST CON SWEET ALERT 

const toastFinDeCompra = (mensaje) => {
    Swal.fire({
        icon: 'success',
        position: 'center',
        title: mensaje,
        showConfirmButton: true,
        background: '#d87a2d',
        color: 'black'
    }).then(okay => {
        if (okay) {
         window.location.href = "../index.html";
       }
});
}