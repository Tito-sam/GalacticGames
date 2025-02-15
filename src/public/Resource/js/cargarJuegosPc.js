
const limpiarDiv = () => {
    const divjuegos = document.querySelector('.j-pc');
    if (divjuegos.children.length > 1) {
        while (divjuegos.children.length >= 1) {
            divjuegos.removeChild(divjuegos.firstChild)
        }
    }
    
}


const cargarJuegosPc = (request) => {
    limpiarDiv();
    fetch(request)
    .then(res => res.json())
    .then(data => {
        const divjuegos = document.querySelector('.j-pc');
        for(let i = 0; i < data.length; i++){
            const request = new Request(`/games/${data[i]}`, {
                method: 'GET'
            })                
            fetch(request)
            .then(res => res.json())
            .then(data => {
                const div = document.createElement('div');
                div.classList.add('juego-pc')
                div.innerHTML = `
                <div class="juegos-pc">
                    <a href="/info_j?id=${data.j_id}"><img src="${data.imagen}" alt="${data.slug}"></a>
                    <p class="nombre-juego">${data.nombre}</p>
                    <p>Precio: <span id="precio">${formatterDolar.format(data.precio)}</span> COP</p>
                    <p>Rating: <span id="rating">${data.rating}</span></p>
                    <button class="agregar-carrito" data-id="${data.j_id}">Agregar al carrito</button>
                </div>
                `;
                divjuegos.appendChild(div);
            })
            .catch(err => console.log(err));
        }
    })
    .catch(err => console.log(err))
}


const request = new Request('/games/cargarJuegosPc', {
    method: 'GET'
})
cargarJuegosPc(request);


const cargarCategorias = () => {
    const request2 = new Request('/games/categorias', {
        method: 'GET'
    })
    fetch(request2)
    .then((res) => res.json())
    .then(data => {
        const categorias = data;
        const listaCategorias = document.querySelector('#select-categoria');
        categorias.forEach(categoria => {
            const cat = document.createElement('option');
            cat.classList.add('opcion_categoria');
            cat.innerHTML = `${categoria.nombre}`;
            cat.value = `${categoria.c_id}`;
            listaCategorias.appendChild(cat);
        });
    })
    .catch(err => console.log(err))
}

cargarCategorias();


const cargarPlataformas = () => {
    const request2 = new Request('/games/plataformas', {
        method: 'GET'
    })
    fetch(request2)
    .then((res) => res.json())
    .then(data => {
        const plataformas = data;
        const listaSO = document.querySelector('#select-so');
        for(let i = 0; i< 3; i++) {
            const plat = document.createElement('option');
            plat.classList.add('opcion_plataforma');
            plat.innerHTML = `${plataformas[i].nombre}`;
            plat.value = `${plataformas[i].id_p}`;
            listaSO.appendChild(plat);
        }
    })
    .catch(err => console.log(err))

}
cargarPlataformas();


const listaCategorias = document.querySelector('#select-categoria');
const listaSO = document.querySelector('#select-so');
const listaPrecio = document.querySelector('#select-precio');


const buscarCategorias = (e) => {
    e.preventDefault();
    if(e.target.value =! 0) {
        let categoria_id = e.target.value;
        const request = new Request(`/games/cargarJC/${categoria_id}`, {
            method: 'GET'
        });
        cargarJuegosPc(request);
    }
}

const buscarSO = (e) => {
    e.preventDefault();
    if(e.target.value != 0) {
        let plataforma_id = e.target.value;
        const request = new Request(`/games/cargarJP/${plataforma_id}`, {
            method: 'GET'
        });
        cargarJuegosPc(request);
    }
}

const buscarPrecio = (e) => {
    e.preventDefault();
    if(e.target.value != 0) {
        let precio = e.target.value;
        let request;
        switch (precio) {
            case 'bajo':
                request = new Request(`/games/cargarJPre/0/100000`, {
                    method: 'GET'
                });
                cargarJuegosPc(request);
                break;
            case 'medio_bajo':
                request = new Request(`/games/cargarJPre/100000/250000`, {
                    method: 'GET'
                });
                cargarJuegosPc(request);
                break;
            case 'medio_alto':
                request = new Request(`/games/cargarJPre/250000/400000`, {
                    method: 'GET'
                });
                cargarJuegosPc(request);
                break;
            case 'alto':
                request = new Request(`/games/cargarJPre/400000/1000000`, {
                    method: 'GET'
                });
                cargarJuegosPc(request);
                break;
        }
        
    }
}

listaCategorias.addEventListener('click', buscarCategorias)
listaSO.addEventListener('click', buscarSO)
listaPrecio.addEventListener('click', buscarPrecio)


