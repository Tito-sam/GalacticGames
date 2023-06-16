const axios = require('axios');
const connection = require('./db.js');

const copiarDatos = async () => {

    /*
    const key = '6724ba52554c48958c73908d1b3a43e7'
    for (let page = 0; page < 4; page++) {
        await axios({
            url: `https://api.rawg.io/api/games?key=${key}&page=${page+1}`,
            method: 'GET',
        })
            .then(res => {
                const games = res.data.results;
                games.forEach(game => {
                    let precio = parseInt(Math.random()*500000)
                    const consult = connection.query('INSERT INTO juegos(nombre, slug, precio, imagen, rating) VALUES (?, ?, ?, ?, ?)', [game.name, game.slug,precio, game.background_image, game.rating]);
                    console.log(consult);
                });       
            })
            .catch((err) => console.log(err));
    
        
    }

    axios({
        url: `https://api.rawg.io/api/genres?key=${key}&page=1&ordering=id`,
        method: 'GET',
    })
        .then(res => {
            const genres = res.data.results;
            genres.forEach(genre => {
                console.log(genre);
                const consult = connection.query('INSERT INTO categorias(nombre, slug) VALUES (?, ?)', [genre.name, genre.slug]);
                console.log(consult); 
            });
        })
        .catch((err) => console.log(err));

    */
};
const plataformasJuegos = () => {
    for(let i = 1; i <= 80; i++) {
        let id = parseInt((Math.random()*6)+1);
        connection.query('INSERT INTO plat_juegos(j_id, id_p) VALUES (?, ?)',[i, id]);
    }
}

const CategoriasJuegos = async () => {
    for(let i = 1; i <= 80; i++) {
        let id = parseInt((Math.random()*19)+1);
        connection.query('INSERT INTO categ_juegos(j_id, c_id) VALUES (?, ?) ',[i, id]);
    }
}

// plataformasJuegos()

//CategoriasJuegos();
module.exports = {copiarDatos}