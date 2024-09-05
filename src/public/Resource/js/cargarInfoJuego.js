const valores = window.location.search;
const urlParams = new URLSearchParams(valores);

const id_juego = urlParams.get('id');



const ObtenerInfoJuegos = () => {
    const request = new Request(`/games/${id_juego}`, {
        method: 'GET'
    })
    fetch(request)
    .then(res => res.json())
    .then(data => {
        const info_j = document.querySelector('.info-j')
        const div = document.createElement('div');
        div.classList.add('content-juego')
        div.innerHTML = `
            <div class="imagen-juego"><img src="${data.imagen}" alt="${data.slug}"></div>
            <div class="datos-juego">
                <h2 class="nombre-juego">${data.nombre}</h2>
                <p>Precio: <span id="precio">${formatterDolar.format(data.precio)}</span> COP</p>
                <p>Rating: <span id="rating">${data.rating}</span></p>
                <button class="agregar-carrito info-ju" data-id="${data.j_id}">Add to carrito</button>
            </div>
        `
        info_j.appendChild(div);
    })
    .catch(err => console.log(err))
    const request2 = new Request('/games/rating/4', {
        method: 'GET'
    })
    fetch(request2)
    .then((res) => res.json())
    .then(data => {
        const mainVentas2 = document.querySelector('.mv2');
        const botonUltimo = document.querySelector('.btn-fin-2');
        for (let i = 0; i < 10; i++) {
            const juego = data[i];
            if(juego.j_id != id_juego) {
                divJuego = document.createElement('div');
                divJuego.classList.add('juegos', 'section-2', 'disactive');
                divJuego.innerHTML = `
                        <a href="/info_j?id=${juego.j_id}"><img src="${juego.imagen}" alt="${juego.slug}"> </a>
                        <p>${juego.nombre}</p>
                        <p>Precio: ${formatterDolar.format(juego.precio)} COP</p>
                        <p>Rating: ${juego.rating}</p> 
                `;
                mainVentas2.insertBefore(divJuego, botonUltimo);
            }
        }
        seccion_2 = document.querySelectorAll('.section-2');
        if (seccion_2.length > 4 ) {
            for(let i = 0; i < 4; i++) {
                let ult = seccion_2[i];
                ult.classList.remove('disactive');
            }
        } else {
            for(let i = 0; i <= seccion_1.length; i++){
                let ult = seccion_2[i];
                ult.classList.remove('disactive');s
            }
        }
    })
    .catch(err => console.log(err))
}

ObtenerInfoJuegos()


