const locales = 'en-US'
const options = {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
}

const formatterDolar = new Intl.NumberFormat(locales, options);



const obtenerJuegos = () => {
    const request = new Request('/games/rating/4', {
        method: 'GET'
    })
    fetch(request)
    .then((res) => res.json())
    .then(data => {
        const mainVentas1 = document.querySelector('.mv1');
        const botonUltimo = document.querySelector('.btn-fin-1');
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
            mainVentas1.insertBefore(divJuego, botonUltimo);
        }
        seccion_1 = document.querySelectorAll('.section-1');
        if (seccion_1.length > 4 ) {
            for(let i = 0; i < 4; i++) {
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
        const mainVentas1 = document.querySelector('.mv2');
        const botonUltimo = document.querySelector('.btn-fin-2');
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
            mainVentas1.insertBefore(divJuego, botonUltimo);
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
                ult.classList.remove('disactive');
            }
        }
    })
    .catch(err => console.log(err))
}



obtenerJuegos()
