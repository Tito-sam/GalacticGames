
const limpiarDiv = () => {
    const divjuegos = document.querySelector('.j-pc');
    if (divjuegos.children.length > 1) {
        while (divjuegos.children.length >= 1) {
            divjuegos.removeChild(divjuegos.firstChild)
        }
    }
    
}

const locales = 'en-US'
const options = {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
}

const formatterDolar = new Intl.NumberFormat(locales, options);

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
                    <button class="agregar-carrito" data-id="${data.j_id}">Add to carrito</button>
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
        const listaCategorias = document.querySelector('#ul-categoria');
        categorias.forEach(categoria => {
            const cat = document.createElement('li');
            cat.classList.add('li_categoria');
            cat.innerHTML = `<a>${categoria.nombre}</a>`;
            cat.id = `${categoria.c_id}`;
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
        const listaSO = document.querySelector('#ul-so');
        for(let i = 0; i< 3; i++) {
            const plat = document.createElement('li');
            plat.classList.add('li_plataforma');
            plat.innerHTML = `<a>${plataformas[i].nombre}</a>`;
            plat.id = `${plataformas[i].id_p}`;
            listaSO.appendChild(plat);
        }
    })
    .catch(err => console.log(err))

}
cargarPlataformas();


const listaCategorias = document.querySelector('#ul-categoria');
const listaSO = document.querySelector('#ul-so');
const listaPrecio = document.querySelector('#ul-precio');


const buscarCategorias = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('li_categoria')) {
        let categoria_id = e.target.id;
        const request = new Request(`/games/cargarJC/${categoria_id}`, {
            method: 'GET'
        });
        cargarJuegosPc(request);
    }
}

const buscarSO = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('li_plataforma')) {
        let plataforma_id = e.target.id;
        const request = new Request(`/games/cargarJP/${plataforma_id}`, {
            method: 'GET'
        });
        cargarJuegosPc(request);
    }
}

const buscarPrecio = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('li-precio')) {
        let precio = e.target.id;
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


