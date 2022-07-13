
import { accesorios } from './stock.js';
import { carritoIndex } from './carritoIndex.js';
//import {carritoTrash} from './carritoIndex.js';



const retornoCardError = () => {
    return `<div class="center white-text"> 
                <br><br><br><br> 
                <h4>En estos momentos no esta disponible nuestro catalogo, por favor intentalo mas tarde.</h4> 
                <br><br> 
                <i class="large material-icons">sentiment_very_dissatisfied</i> 
                <br><br> 
            </div>`
}

//CARGAR NOTEBOOKS DESDE json

const obtenerContenido = (URL) => {
    //debugger
    fetch(URL)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            datos.forEach(notebook => {
                const div = document.createElement('div')
                div.classList.add('card')
                div.innerHTML += `
                                <div class="producto">
                                 <div class="card-body">
                                    <div class="card-img-actions">
                                        <img src="${notebook.img}" class="card-img img-fluid" width="96" height="350" alt="">
                                    </div>
                                </div>
        
                                <div class="card-body bg-light text-center">
                                    <div class="mb-2">
                                        <h4 class="font-weight-semibold mb-2">${notebook.nombre}</h4>
                                    </div>
                                    <h3 class="mb-0 font-weight-semibold">$ ${notebook.precio}</h3>
        
                                    <div>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                        <i class="fa fa-star star"></i>
                                    </div>
                                    <div class="text-muted mb-3">34 reviews</div>
                                    <button type="button" class="btn bg-cart" id=boton${notebook.id}><i class="fa fa-cart-plus mr-2"></i> Agregar al carrito</button>
                                </div>
                                </div>
                                    `
                contenedorNotebooks.appendChild(div)
                const botonCarrito = document.querySelector(`#boton${notebook.id}`)
                botonCarrito.addEventListener('click', () => {
                    carritoIndex(notebook.id)
                    toastCarritoAcces(`Se agrego ${notebook.nombre} al carrito`)

                })

            })


        })
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        obtenerContenido(URL)
    }, 100);
})






//CARGAR ACCESORIOS EN HTML

const mostrarAccesorios = (accesorios) => {
    const contenedorAccesorios = document.getElementById('container-accesorios')

    accesorios.forEach(accesorio => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML += `   
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="${accesorio.img}" class="img-fluid" alt="">
                                        </div>
                                        <div class="thumb-content">
                                            <h4>${accesorio.nombre}</h4>
                                            <p class="item-price"><strike>$400.00</strike> <span>$${accesorio.precio}</span>
                                            </p>
                                            <div class="star-rating">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star-o"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <button type="button" class="btn bg-cart" id=boton${accesorio.id}><i class="fa fa-cart-plus mr-2"></i>
                                                Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            `
        contenedorAccesorios.appendChild(div)

        //CARGAR ACCESORIO EN CARRITO

        const botonCarrito = document.getElementById(`boton${accesorio.id}`)
        botonCarrito.addEventListener('click', () => {
            carritoIndex(accesorio.id)
            toastCarritoAcces(`Se agrego ${accesorio.nombre} al carrito`)
        })




    });
}


mostrarAccesorios(accesorios)

//TOAST CON SWEET ALERT -----------------------------------

const toastCarritoAcces = (mensaje) => {
    Swal.fire({
        icon: 'success',
        position: 'bottom-right',
        title: mensaje,
        showConfirmButton: false,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        background: 'darkred',
        color: '#ffffff'
    })
}

//ELIMINAR ACCESORIO DEL CARRITO