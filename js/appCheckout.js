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
            div.innerHTML += ` <img src="${producto.img}" width="50" height="50" alt="">
                                <p class="productoEnCarrito">${producto.nombre}</p>
                                <p class="productoEnCarrito">Precio: ${producto.precio}</p>
                                <p id="cantidad${producto.id}" class="productoEnCarrito">Cantidad: ${producto.cant}</p>
                                <button id="eliminar${producto.id}" class="boton-eliminar"><img src="../icons/svg2/trash-can-solid.svg"/></button>
                                    `
            contenedorCarrito.appendChild(div)
        }
        )
    }
}
recuperarCarrito()