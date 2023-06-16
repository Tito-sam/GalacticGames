
const divProductos = document.querySelector('.carrito-juegos')
const user = document.querySelector('.userNav');
const user_id = user.id;

const cargarJuegoCarritoPag = (id, j_id) => {
    const request = new Request(`/car/${id}/${j_id}`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    fetch(request)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const  limpiarHTMLPag = () => {
    const divProductos = document.querySelector('.carrito-juegos')
    const textoProductos = document.querySelector('.carrito-juegos').querySelector('.cantidad-juegos');
    for(let i = 0; i <= divProductos.children.length; i++) {
        divProductos.removeChild(divProductos.lastChild)        
    }
    textoProductos.classList.remove('disactive')
    divProductos.appendChild(textoProductos);
}

const cargarHtmlCarritoPag = (id) => {
    limpiarHTMLPag();
    const request = new Request(`/car/${id}`, {
        method: 'get'
    })
    fetch(request)
    .then(res => res.json())
    .then(data => {
        datosCarrito = data.length;
        carrito.innerText = `${datosCarrito}`;
        if (data.length !== 0) {
            const textoProductos = document.querySelector('.carrito-juegos').querySelector('.cantidad-juegos');
            textoProductos.classList.add('disactive')
            for(let i = 0; i < data.length; i++) {
                if(i == 0) {
                    const request2 = new Request(`/games/${data[i]}`)
                    fetch(request2)
                    .then(res => res.json())
                    .then(data2 => {
                        const div = document.createElement('div');
                        div.innerHTML =`
                            <a href="/info_j?id=${data2.j_id}" class="img-a-pag"><img src="${data2.imagen}" alt="${data2.slug}"></a>
                            <div class="p-pag">
                                <p>${data2.nombre}</p>
                                <p><span id="precio-juego">${data2.precio}</span> COP</p>
                                <p data-cant=${1}>Cantidad: <span class="cant-pag">${1}</p>
                            </div>
                            <a href="#" class="borrar-curso-pag" data-id="${data2.j_id}"> X </a>
                        `;
                        div.classList.add('producto-carrito');
                        div.id = `${data2.slug}-pag`;
                        const elementTotalPagar = document.querySelector('#cantidad-pagar');
                        let totalPagar = parseInt(elementTotalPagar.innerText);
                        totalPagar = totalPagar + data2.precio;
                        elementTotalPagar.innerText = `${totalPagar}`;
                        divProductos.appendChild(div);
                    })
                    .catch ( err => console.log(err))
                } else {
                    const request2 = new Request(`/games/${data[i]}`)
                    fetch(request2)
                    .then(res => res.json())
                    .then(data2 => {
                        const divjuego = document.querySelector(`#${data2.slug}-pag`)
                        if (divjuego) {
                            let pCantidad = document.querySelector(`#${data2.slug}-pag`).querySelector('.cant-pag');
                            let precioJuego = document.querySelector(`#${data2.slug}-pag`).querySelector('#precio-juego');
                            const elementTotalPagar = document.querySelector('#cantidad-pagar');
                            let totalPagar = parseInt(elementTotalPagar.innerText);
                            totalPagar = totalPagar + parseInt(precioJuego.innerText);
                            elementTotalPagar.innerText = `${totalPagar}`;
                            let cantidad = parseInt(pCantidad.innerText);
                            cantidad++;
                            pCantidad.innerText = `${cantidad}`;

                        } else {
                            const div = document.createElement('div');
                            div.innerHTML =`
                                <a href="/info_j?id=${data2.j_id}" class="img-a-pag"><img src="${data2.imagen}" alt="${data2.slug}"></a>
                                <div class="p-pag">
                                    <p>${data2.nombre}</p>
                                    <p><span id="precio-juego">${data2.precio}</span> COP</p>
                                    <p>Cantidad: <span class="cant-pag">${1}</p>
                                </div>
                                <a class="borrar-curso-pag" data-id="${data2.j_id}"> X </a>
                            `;
                            div.classList.add('producto-carrito');
                            div.id = `${data2.slug}-pag`;
                            const elementTotalPagar = document.querySelector('#cantidad-pagar');
                            let totalPagar = parseInt(elementTotalPagar.innerText);
                            totalPagar = totalPagar + data2.precio;
                            elementTotalPagar.innerText = `${totalPagar}`;
                            divProductos.appendChild(div);
                        }
                    })
                    .catch ( err => console.log(err))
                }
            }
            
        } else {
            const textoProductos = document.querySelector('.carrito-juegos').querySelector('.cantidad-juegos');
            textoProductos.classList.remove('disactive')
        }
    })
    .catch(err => console.log(err))  
}

cargarHtmlCarritoPag(user_id);


const eliminarJuegoPag = (e) => {
    e.preventDefault()
    const Juego_id = e.target.getAttribute('data-id');
    const user = document.querySelector('.userNav');
    const user_id = user.id;
    if(e.target.classList.contains('borrar-curso-pag')) {
        let contentCarrito = document.querySelector('.productos-carrito');
        let carrito = document.getElementById('carrito');
        let datosCarrito = parseInt(carrito.innerText);
        const request1 = new Request(`/car/${user_id}/${Juego_id}`, {
            method: 'get'
        })
        fetch(request1)
        .then(res => res.json())
        .then(data => {
            if (data.length == 1) {
                const request2 = new Request(`/car/${user_id}/${Juego_id}`, {
                    method: 'delete'
                })
                fetch(request2)
                .then(res => console.log(res.ok))
                .catch(err => console.log(err));
                const idDivJuego = e.target.parentElement.id;
                for (let i = 0; i < contentCarrito.children.length; i++) {
                    let id_juego = `${contentCarrito.children[i].id}-pag`;
                    if(id_juego == idDivJuego) {
                        console.log(contentCarrito.children[i])
                        contentCarrito.removeChild(contentCarrito.children[i])
                    }
                }
                datosCarrito--;
                carrito.innerText = `${datosCarrito}`;
                const divjuego = document.querySelector(`#${idDivJuego}`);
                let precioJuego = document.querySelector(`#${idDivJuego}`).querySelector('#precio-juego');
                const elementTotalPagar = document.querySelector('#cantidad-pagar') 
                let totalPagar = parseInt(elementTotalPagar.innerText);
                totalPagar = totalPagar - parseInt(precioJuego.innerText);
                elementTotalPagar.innerText = `${totalPagar}`;
                divjuego.remove();
                let children = divProductos.children;
                if( children.length == 1) {
                    const textoProductos = document.querySelector('.carrito-juegos').querySelector('.cantidad-juegos');
                    textoProductos.classList.remove('disactive')
                }
            } else {
                let cantidadJuegos = (data.length - 1)
                const request2 = new Request(`/car/${user_id}/${Juego_id}`, {
                    method: 'delete'
                })
                fetch(request2)
                .then(res => console.log(res.ok))
                .catch(err => console.log(err))
                for (let i = 0; i < cantidadJuegos; i++) {
                    cargarJuegoCarritoPag(user_id,Juego_id);
                }
                const idDivJuego = e.target.parentElement.id;
                for (let i = 0; i < contentCarrito.children.length; i++) {
                    let id_juego = `${contentCarrito.children[i].id}-pag`;
                    if(id_juego == idDivJuego) {
                        let cant = contentCarrito.children[i].querySelector('.cant');
                        let cantNum = parseInt(cant.textContent);
                        cantNum--;
                        cant.innerText = `${cantNum}` 
                    }
                }
                datosCarrito--;
                carrito.innerText = `${datosCarrito}`;
                let pCantidad = document.querySelector(`#${idDivJuego}`).querySelector('.cant-pag');
                let precioJuego = document.querySelector(`#${idDivJuego}`).querySelector('#precio-juego');
                const elementTotalPagar = document.querySelector('#cantidad-pagar');
                let totalPagar = parseInt(elementTotalPagar.innerText);
                totalPagar = totalPagar - parseInt(precioJuego.innerText);
                elementTotalPagar.innerText = `${totalPagar}`;
                let cantidad = parseInt(pCantidad.innerText);
                cantidad--;
                pCantidad.innerText = `${cantidad}`;                
            }  
        }).catch(err => console.log(err));
    }
}


divProductos.addEventListener('click', eliminarJuegoPag);

let contentCarrito = document.querySelector('.productos-carrito');

const borrarJuegosCarrito = () => {
    e.preventDefault();
    const user = document.querySelector('.userNav');
    const user_id = user.id;
    if(e.target.classList.contains('borrar-curso')) {
        cargarHtmlCarritoPag(user_id);
    }
}
contentCarrito.addEventListener('click', borrarJuegosCarrito)

const btnPagar = document.querySelector('#pagar');

const ejecucionPagar = (e) => {
    e.preventDefault()
    let contentCarrito = document.querySelector('.productos-carrito');
    let carrito = document.getElementById('carrito');
    const user = document.querySelector('.userNav');
    const user_id = user.id;
    const contentCarritoPag = document.querySelector('.content-carrito');
    const elementTotalPagar = document.querySelector('#cantidad-pagar');
    let totalPagar = parseInt(elementTotalPagar.innerText);
    if(divProductos.children.length > 1) {
        const request = new Request(`/car/${user_id}`, {
            method: 'delete'
        })
        fetch(request)
        .then(res => console.log(res.ok))
        .catch(err => console.log(err))
        while( contentCarrito.firstChild) {
            contentCarrito.removeChild(contentCarrito.firstChild);
        }
        limpiarHTMLPag()
        totalPagar = 0;
        elementTotalPagar.innerText = `${totalPagar}`;
        carrito.innerText = '0';
    
        const mensajePagado = document.querySelector('.pagado');
        if (mensajePagado) {
            mensajePagado.innerText = 'Se han comprado todos los productos, revise su correo donde le llegara toda la informacion.';
        } else {
            const mensaje = document.createElement('p')
            mensaje.classList.add('pagado');
            mensaje.innerText = 'Se han comprado todos los productos, revise su correo donde le llegara toda la informacion.';
            contentCarritoPag.insertBefore(mensaje, btnPagar);
        }
    } else {
        const mensajePagado = document.querySelector('.pagado');
        if (mensajePagado) {
            mensajePagado.innerText = 'Lo sentimos, no hay productos en el carrito.';
        } else {
            const mensaje = document.createElement('p');
            mensaje.classList.add('pagado');
            mensaje.innerText = 'Lo sentimos, no hay productos en el carrito.';
            contentCarritoPag.insertBefore(mensaje, btnPagar);
        }
    }
    
    
}

btnPagar.addEventListener('click', ejecucionPagar)

