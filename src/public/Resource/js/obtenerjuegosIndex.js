const mainVentas1 = document.querySelector('.mv1');
const botonUltimo1 = document.querySelector('.btn-fin-1');
const mainVentas2 = document.querySelector('.mv2');
const botonUltimo2 = document.querySelector('.btn-fin-2');

var tamWidth = mainVentas1.offsetWidth;
var cantjuegos = parseInt((tamWidth / 240) - 1);



const obtenerJuegos = () => {
    const request = new Request('/games/rating/4', {
        method: 'GET'
    })
    fetch(request)
    .then((res) => res.json())
    .then(data => {
        for (let i = 0; i < 10; i++) {
            const juego = data[i];
            divJuego = document.createElement('div');
            divJuego.classList.add('juegos', 'section-1', 'disactive');
            divJuego.innerHTML = `
                    <a href="/info_j?id=${juego.j_id}"><img src="${juego.imagen}" alt="${juego.slug}"> </a>
                    <p>${juego.nombre}</p>
                    <p>Precio: ${formatterDolar.format(juego.precio)} COP</p>
                    <p>Rating: ${juego.rating}</p> 
            `;
            mainVentas1.insertBefore(divJuego, botonUltimo1);
        }
        seccion_1 = document.querySelectorAll('.section-1');
        if (mainVentas1.offsetWidth < seccion_1.length * 240) {
            for(let i = 0; i < (mainVentas1.offsetWidth / 240) - 2; i++) {
                let ult = seccion_1[i];
                ult.classList.remove('disactive');
            }
        } else {
            for(let i = 0; i <= seccion_1.length; i++){
                let ult = seccion_1[i];
                ult.classList.remove('disactive');
            }
        }
    })
    .catch(err => console.log(err))

    const request2 = new Request('http://localhost:3000/games/precio/100000', {
        method: 'GET'
    })
    fetch(request2)
    .then((res) => res.json())
    .then(data => {
        for (let i = 0; i < 10; i++) {
            const juego = data[i];
            divJuego = document.createElement('div');
            divJuego.classList.add('juegos', 'section-2', 'disactive');
            divJuego.innerHTML = `
                    <a href="/info_j?id=${juego.j_id}"><img src="${juego.imagen}" alt="${juego.slug}"> </a>
                    <p>${juego.nombre}</p>
                    <p>Precio: ${formatterDolar.format(juego.precio)} COP</p>
                    <p>Rating: ${juego.rating}</p> 
            `;
            mainVentas2.insertBefore(divJuego, botonUltimo2);
        }
        seccion_2 = document.querySelectorAll('.section-2');
        if (mainVentas2.offsetWidth < seccion_2.length * 240) {
            for(let i = 0; i < (mainVentas2.offsetWidth / 240) - 2; i++) {
                let ult = seccion_2[i];
                ult.classList.remove('disactive');
            }
        } else {
            for(let i = 0; i <= seccion_2.length; i++){
                let ult = seccion_2[i];
                ult.classList.remove('disactive');
            }
        }
    })
    .catch(err => console.log(err))
}



obtenerJuegos()
