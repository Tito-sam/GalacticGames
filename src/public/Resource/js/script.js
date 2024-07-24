/* Inicio */


main_ventas1 = document.querySelector('.mv1');
main_ventas2 = document.querySelector('.mv2');
btn_izq1 = document.querySelector('.btn-izq-1');
btn_izq2 = document.querySelector('.btn-izq-2');
btn_der1 = document.querySelector('.btn-der-1');
btn_der2 = document.querySelector('.btn-der-2');
seccion_1 = document.querySelectorAll('.section-1');
seccion_2 = document.querySelectorAll('.section-2');


const mover_izq = (seccion, btn, btn2) => {
    for (let i = 0; i < seccion.length; i++) {
        let pri = seccion[i];
        let ult_b = seccion[i+4];
        let ult_v = seccion[seccion.length - 1];
        if (pri.classList.contains('disactive')) {
            continue;
        }
        else if (!ult_v.classList.contains('disactive')) {
            btn.classList.add('btn-disactive');
            btn.classList.remove('boton-main');
            break;
        }
        else {
            pri.classList.add('disactive');
            btn2.classList.add('boton-main');
            btn2.classList.remove('btn-disactive');
            break;
        }
    }
    
    for (let i = 0; i < seccion.length; i++) {
        let ult = seccion[i];
        let ant_ult = seccion[i-1];
        if (ant_ult != undefined) {
            if (ult == (seccion.length -1) && !ult.classList.contains('disactive')) {
                break;
            }
            else if (ult.classList.contains('disactive') && !ant_ult.classList.contains('disactive')){
                ult.classList.remove('disactive');
                break;
            }
        }
        else {
            continue;
        }
     }

}


const mover_der =  (seccion,btn, btn2) => {
    for (let i = 0; i < seccion.length; i++) {
        let pri = seccion[i];
        let seg = seccion[i+1];
        let ult = seccion[i+4];
        if (seg != undefined) {
            if (!pri.classList.contains('disactive')) {
                btn.classList.add('btn-disactive');
                btn.classList.remove('boton-main');
                break;
            }
            else if (pri.classList.contains('disactive') && !seg.classList.contains('disactive')){
                pri.classList.remove('disactive');
                ult.classList.add('disactive');
                btn2.classList.add('boton-main');
                btn2.classList.remove('btn-disactive');
                break;
            }
            else {
                continue;
            }
        }
        else {
            btn.classList.add('btn-disactive');
            btn.classList.remove('boton-main');
            break;
        }
    }
    
}




// Agregar al Carrito

const ContentAgregarCarrito = document.getElementById('content-agregar-carrito');
let carrito = document.getElementById('carrito');


if (carrito) {
    let contentCarrito = document.querySelector('.productos-carrito');
    let vaciarCarrito = document.getElementById('vaciar-carrito');
    let datosCarrito = parseInt(carrito.innerText);
    const user = document.querySelector('.userNav');
    const user_id = user.id;
    
    const  limpiarHTML = () => {
        while( contentCarrito.firstChild) {
            contentCarrito.removeChild(contentCarrito.firstChild);
        }
    }

    const cargarPriCarrito = (id) => {
        limpiarHTML()
        const request = new Request(`/car/${id}`, {
            method: 'get'
        })
        fetch(request)
        .then(res => res.json())
        .then(data => {
            datosCarrito = data.length;
            carrito.innerText = `${datosCarrito}`;
            console.log(data)
            if (data.length !== 0) {
                for(let i = 0; i < data.length; i++) {
                    if(i == 0) {
                        const request2 = new Request(`/games/${data[i]}`)
                        fetch(request2)
                        .then(res => res.json())
                        .then(data2 => {
                            const div = document.createElement('div');
                            div.innerHTML =`
                                <a href="/info_j?id=${data2.j_id}" class="img-a"><img src="${data2.imagen}" alt="${data2.slug}"></a>
                                <div class="p">
                                    <p>${data2.nombre}</p>
                                    <p>${data2.precio}</p>
                                    <p data-cant=${1}>Cantidad: <span class="cant">${1}</p>
                                    <a href="#" class="borrar-curso" data-id="${data2.j_id}"> X </a>
                                </div>
                            `;
                            div.classList.add('p-car');
                            div.id = data2.slug;
                            console.log(div)
                            contentCarrito.appendChild(div);
                        })
                        .catch ( err => console.log(err))
                    } else {
                        const request2 = new Request(`/games/${data[i]}`)
                        fetch(request2)
                        .then(res => res.json())
                        .then(data2 => {
                            const divjuego = document.querySelector(`#${data2.slug}`)
                            if (divjuego) {
                                let pCantidad = document.querySelector(`#${data2.slug}`).querySelector('.cant');
                                let cantidad = parseInt(pCantidad.innerText);
                                cantidad++;
                                pCantidad.innerText = `${cantidad}`;
    
                            } else {
                                const div = document.createElement('div');
                                div.innerHTML =`
                                    <a href="/info_j?id=${data2.j_id}" class="img-a"><img src="${data2.imagen}" alt="${data2.slug}"></a>
                                    <div class="p">
                                        <p>${data2.nombre}</p>
                                        <p>${data2.precio}</p>
                                        <p data-cant=${1}>Cantidad: <span class="cant">${1}</p>
                                        <a class="borrar-curso" data-id="${data2.j_id}"> X </a>
                                    </div>
                                `;
                                div.classList.add('p-car');
                                div.id = data2.slug;
                                contentCarrito.appendChild(div);
                            }
                        })
                        .catch ( err => console.log(err))
                    }
                }
            }
        })
        .catch(err => console.log(err))
            
    }
    

    const cargarJuegoCarrito = (id, j_id) => {
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

    const cargarHtmlCarrito =  (datos) => {
        const divjuego = document.querySelector(`#${datos.slug}`)
        if (divjuego) {
            datosCarrito++;
            carrito.innerText = `${datosCarrito}`;
            let pCantidad = document.querySelector(`#${datos.slug}`).querySelector('.cant');
            let cantidad = parseInt(pCantidad.innerText);
            cantidad++;
            pCantidad.innerText = `${cantidad}`;
        } else {
            datosCarrito++;
            carrito.innerText = `${datosCarrito}`;
            const div = document.createElement('div');
            div.innerHTML =`
                <a href="/info_j?id=${datos.id}" class="img-a"><img src="${datos.img}" alt="${datos.slug}"></a>
                <div class="p">
                    <p>${datos.nombre}</p>
                    <p>${datos.precio}</p>
                    <p>Cantidad: <span class="cant">${1}</p>
                    <a class="borrar-curso" data-id="${datos.j_id}"> X </a>
                </div>
            `;
            div.classList.add('p-car');
            div.id = datos.slug;
            contentCarrito.appendChild(div);
            }
    }
    

    const  eliminarJuego =  (e) => {
        e.preventDefault()
        if(e.target.classList.contains('borrar-curso')) {
            const divJuego = e.target.parentElement.parentElement;
            const Juego_id = e.target.getAttribute('data-id');
            const user = document.querySelector('.userNav');
            const user_id = user.id;
            const request1 = new Request(`/car/${user_id}/${Juego_id}`, {
                method: 'get'
            })
            fetch(request1)
            .then(res => res.json())
            .then(data => {
                console.log(data.length);
                if (data.length <= 1) {
                    datosCarrito--;
                    carrito.innerText = `${datosCarrito}`;
                    divJuego.remove()
                    const request2 = new Request(`/car/${user_id}/${Juego_id}`, {
                        method: 'delete'
                    })
                    fetch(request2)
                    .then(res => console.log(res.ok))
                    .catch(err => console.log(err))
                } else {
                    let cantidadJuegos = (data.length - 1)
                    datosCarrito--;
                    carrito.innerText = `${datosCarrito}`;
                    const cantidad = divJuego.querySelector('.cant');
                    let cantidadNum = parseInt(cantidad.textContent);
                    cantidadNum--;
                    cantidad.innerText = `${cantidadNum}`;
                    const request2 = new Request(`/car/${user_id}/${Juego_id}`, {
                        method: 'delete'
                    })
                    fetch(request2)
                    .then(res => console.log(res.ok))
                    .catch(err => console.log(err))
                    for (let i = 0; i < cantidadJuegos; i++) {
                        cargarJuegoCarrito(user_id,Juego_id);
                    }
                }  
            }).catch(err => console.log(err));
        }
    }

    const cargarCarrito = (e) => {
        if (e.target.classList.contains('agregar-carrito')) {
            const user = document.querySelector('.userNav');
            const user_id = user.id;
            const productoSelect = e.target.parentElement;
            const slug = productoSelect.parentElement.querySelector('img').alt;
            const img = productoSelect.parentElement.querySelector('img').src;
            const id = productoSelect.querySelector('button').getAttribute('data-id');
            const nombre = productoSelect.querySelector('.nombre-juego').textContent
            const precio = productoSelect.querySelector('#precio').textContent
            const rating = productoSelect.querySelector('#rating').textContent
            let cantidad = 1;
            const datos = {
                slug,
                nombre,
                precio,
                rating,
                cantidad,
                id, 
                img
            }
            console.log(datos)
            cargarJuegoCarrito(user_id, id);              
            cargarHtmlCarrito(datos);
            console.log('Cargando');
        }
    }
    const vaciarCarritoCompleto = () => {
        const user = document.querySelector('.userNav');
        const user_id = user.id;
        const request = new Request(`/car/${user_id}`, {
            method: 'delete'
        })
        fetch(request)
        .then(res => console.log(res.ok))
        .catch(err => console.log(err))
        limpiarHTML();
        carrito.innerText = '0';

    }

    cargarPriCarrito(user_id);
    contentCarrito.addEventListener('click', eliminarJuego);

    vaciarCarrito.addEventListener('click', vaciarCarritoCompleto);
    ContentAgregarCarrito.addEventListener('click', cargarCarrito);
}




