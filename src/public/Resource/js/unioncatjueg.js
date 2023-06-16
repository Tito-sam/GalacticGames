

const categoriasJuegos = () => {
    const request = new Request('/games', {
        method: 'GET'
    })
    fetch(request)
    .then((res) => res.json())
    .then(data => {
        const juegos = data;
        const CategoriasJuegos = document.querySelector('.CategoriasJuegos');
        const botonUltimo = document.querySelector('#enviarRelacionC');
        const lista = document.createElement('select');
        lista.id = 'lista_juegos1';
        lista.name = 'nombre_juego';
        juegos.forEach(juego => {
           const input = document.createElement('option')
           input.textContent = juego.nombre;
           lista.appendChild(input);
        });
        CategoriasJuegos.insertBefore(lista, botonUltimo);
    })
    .catch(err => console.log(err));

    const request2 = new Request('/games/categorias', {
        method: 'GET'
    })
    fetch(request2)
    .then((res) => res.json())
    .then(data => {
        const categorias = data;
        const CategoriasJuegos = document.querySelector('.CategoriasJuegos');
        const botonUltimo = document.querySelector('#enviarRelacionC');
        const lista = document.createElement('select');
        lista.id = 'lista_categorias';
        lista.name = 'nombre_categoria';
        categorias.forEach(categoria => {
           const input = document.createElement('option')
           input.textContent = categoria.nombre;
           lista.appendChild(input);
        });
        CategoriasJuegos.insertBefore(lista, botonUltimo);
    })
    .catch(err => console.log(err))
};

categoriasJuegos();

const plataformasJuegos = () => {
    const request = new Request('/games', {
        method: 'GET'
    })
    fetch(request)
    .then((res) => res.json())
    .then(data => {
        const juegos = data;
        const plataformasJuegos = document.querySelector('.PlataformasJuegos');
        const botonUltimo = document.querySelector('#enviarRelacionP');
        const lista = document.createElement('select');
        lista.id = 'lista_juegos2';
        lista.name = 'nombre_juego';
        juegos.forEach(juego => {
           const input = document.createElement('option')
           input.textContent = juego.nombre;
           lista.appendChild(input);
        });
        plataformasJuegos.insertBefore(lista, botonUltimo);
    })
    .catch(err => console.log(err));

    const request2 = new Request('/games/plataformas', {
        method: 'GET'
    })
    fetch(request2)
    .then((res) => res.json())
    .then(data => {
        const plataformas = data;
        const plataformasJuegos = document.querySelector('.PlataformasJuegos');
        const botonUltimo = document.querySelector('#enviarRelacionP');
        const lista = document.createElement('select');
        lista.id = 'lista_plataformas';
        lista.name = 'nombre_plataforma';
        plataformas.forEach(plataforma => {
           const input = document.createElement('option')
           input.textContent = plataforma.nombre;
           lista.appendChild(input);
        });
        plataformasJuegos.insertBefore(lista, botonUltimo);
    })
    .catch(err => console.log(err))
};

plataformasJuegos();


const enviarCategorias = () => {
    const juego = document.getElementById('lista_juegos1').value;
    const categoria = document.getElementById('lista_categorias').value;
    let data = `{
        "juego": "${juego}",
        "categoria": "${categoria}"
    }`;
    data = JSON.parse(JSON.stringify(data))
    const request = new Request('/games/cargarCategorias',{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: data
    }) 
    fetch(request)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const enviarDatos = document.querySelector('#enviarRelacionC');

enviarDatos.addEventListener('click', enviarCategorias)

const enviarPlataformas = () => {
    const juego = document.getElementById('lista_juegos2').value;
    const plataforma = document.getElementById('lista_plataformas').value;
    data = `{
        "juego": "${juego}",
        "plataforma": "${plataforma}"
    }`;
    data = JSON.parse(JSON.stringify(data))
    const request = new Request('/games/cargarPlataformas',{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: data
    }) 
    fetch(request)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const enviarDatos2 = document.querySelector('#enviarRelacionP');

enviarDatos2.addEventListener('click', enviarPlataformas)