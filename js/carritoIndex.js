import {productos} from './stock.js';


const carritoCompras = [];



export const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById('carrito-contenedor')
    debugger
    const renderProductoCarrito = () =>{
    let producto = productos.find(producto => producto.id == productoId)
    carritoCompras.push(producto)
    guardoCarrito()

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML +=      ` <img src="${producto.img}" width="50" height="50" alt="">
                            <p class="productoEnCarrito">${producto.nombre}</p>
                            <p class="productoEnCarrito">Precio: ${producto.precio}</p>
                            <p id="cantidad${producto.id}" class="productoEnCarrito">Cantidad: ${producto.cant}</p>
                            <button id="eliminar${producto.id}" class="boton-eliminar"><img src="../icons/svg2/trash-can-solid.svg"/></button>
                          `
            contenedorCarrito.appendChild(div)

            const btnDel = document.getElementById(`eliminar${producto.id}`) 
            btnDel.addEventListener('click', () =>{
            eliminarDelCarrito(`${producto.id}`)
            })
        

                
    }
    renderProductoCarrito()
}


//Eliminar item del carrito
//     function eliminarDelCarrito (producto) {
//     debugger;
//     const productoAremover = document.getElementById(`eliminar${producto.id}`);
//     productoAremover.remove();
// }

//este es el codigo que me pasaste para eliminar
const eliminarDelCarrito = (productoEliminado) => {
    debugger
    console.log(carritoCompras);
    const contCarrito = carritoCompras.find( producto => producto.id == productoEliminado)
    const indice = carritoCompras.indexOf(contCarrito)
    console.log(indice,contCarrito);
    carritoCompras.splice(indice, 1)
    console.log(carritoCompras);
    guardoCarrito()
    location.reload();
    }


//guardar carrito
function guardoCarrito() {
    if (carritoCompras.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carritoCompras))
    }
    else if(carritoCompras.length < 1)
        localStorage.clear();
    }


//Recupero carrito
const recuperarCarrito = () => {
    //debugger
    const contenedorCarrito = document.getElementById('carrito-contenedor')
        if (localStorage.getItem("carrito")) {
        let carrito = JSON.parse(localStorage.getItem("carrito"))

            carrito.forEach(producto => {
            carritoCompras.push(producto)
            let div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            div.innerHTML +=    ` <img src="${producto.img}" width="50" height="50" alt="">
                                    <p class="productoEnCarrito">${producto.nombre}</p>
                                    <p class="productoEnCarrito">Precio: ${producto.precio}</p>
                                    <p id="cantidad${producto.id}" class="productoEnCarrito">Cantidad: ${producto.cant}</p>
                                    <button id="eliminar${producto.id}" class="boton-eliminar"><img src="../icons/svg2/trash-can-solid.svg"/></button>
                                `
                    contenedorCarrito.appendChild(div)

            const btnDel = document.getElementById(`eliminar${producto.id}`) 
            btnDel.addEventListener('click', () =>{
            eliminarDelCarrito(`${producto.id}`)
            })

        }
        )
    }
}
recuperarCarrito()




//para mi yo del futuro
//Ir a la pagina de checkout
//cambiar btnVer por el botón "finalizar compra"
// btnVer.addEventListener("click",()⇒>{
//     location.href="checkout.html"
// })
