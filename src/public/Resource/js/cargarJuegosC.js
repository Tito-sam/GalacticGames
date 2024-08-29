
const limpiarDiv = () => {
    const divjuegos = document.querySelector('.j-c');
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

const cargarJuegosC =  (request) => {
    limpiarDiv();
    fetch(request)
    .then(res => res.json())
    .then(data => {
        const divjuegos = document.querySelector('.j-c');
        for(let i = 0; i < data.length; i++){
            const request = new Request(`/games/${data[i]}`, {
                method: 'GET'
            })                
            fetch(request)
            .then(res => res.json())
            .then(data => {
                const div = document.createElement('div');
                div.classList.add('juego-consola')
                div.innerHTML = `
                <div class="juegos-c" >
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
const request = new Request('/games/cargarJuegosC', {
    method: 'GET'
})
cargarJuegosC(request)



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
        const listaconsola = document.querySelector('#select-consola');
        for(let i = 3; i < 6; i++) {
            const plat = document.createElement('option');
            plat.classList.add('opcion_plataforma');
            plat.innerHTML = `${plataformas[i].nombre}`;
            plat.value = `${plataformas[i].id_p}`;
            listaconsola.appendChild(plat);
        } 
    })
    .catch(err => console.log(err))

}
cargarPlataformas();


const listaCategorias = document.querySelector('#select-categoria');
const listaconsola = document.querySelector('#select-consola');
const listaPrecio = document.querySelector('#select-precio');


const buscarCategorias = (e) => {
    e.preventDefault();
    if(e.target.value != 0) {

        let categoria_id = e.target.value;
        const request = new Request(`/games/cargarJC/${categoria_id}`, {
            method: 'GET'
        });
        cargarJuegosC(request);
    }
}

const buscarConsola = (e) => {
    e.preventDefault();
    if(e.target.value != 0) {
        let plataforma_id = e.target.value;
        const request = new Request(`/games/cargarJP/${plataforma_id}`, {
            method: 'GET'
        });
        cargarJuegosC(request);
    }
}

const buscarPrecio = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    if(e.target.value != 0) {
        let precio = e.target.value;
        let request;
        switch (precio) {
            case 'bajo':
                request = new Request(`/games/cargarJPre/0/100000`, {
                    method: 'GET'
                });
                cargarJuegosC(request);
                break;
            case 'medio_bajo':
                request = new Request(`/games/cargarJPre/100000/250000`, {
                    method: 'GET'
                });
                cargarJuegosC(request);
                break;
            case 'medio_alto':
                request = new Request(`/games/cargarJPre/250000/400000`, {
                    method: 'GET'
                });
                cargarJuegosC(request);
                break;
            case 'alto':
                request = new Request(`/games/cargarJPre/400000/1000000`, {
                    method: 'GET'
                });
                cargarJuegosC(request);
                break;
        }
        
    }
}

listaCategorias.addEventListener('click', buscarCategorias)
listaconsola.addEventListener('click', buscarConsola)
listaPrecio.addEventListener('click', buscarPrecio)