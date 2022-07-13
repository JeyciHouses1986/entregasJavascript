//variables formulario
const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputTelefono = document.querySelector("#inputTelefono")
const inputCorreo = document.querySelector("#inputCorreo")
const btnSubmit = document.querySelector("#submit")

let datosDeInput = ""

const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "form-control hint fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "form-control hint")
        }
    }
}

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos antes de ENVIAR"
})

focoEnCampos()