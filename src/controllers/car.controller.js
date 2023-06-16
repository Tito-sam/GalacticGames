const connection = require('../db/db.js');

const getCar = (req, res) => {
    try {
        id = req.params.id;
        connection.query('SELECT (j_id) FROM carrito_juegos WHERE id_car = ?', [id], (err, results) => {
            const juegos = results;
            const id_juegos = juegos.map(juego => juego.j_id);
            res.json(id_juegos);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
}

const getGamesCar =  (req, res) => {
    try {
        j_id = req.params.j_id;
        id = req.params.id;
        connection.query('SELECT * FROM carrito_juegos WHERE id_car = ? AND j_id = ?', [id, j_id], (err, results) => {
            const juegos = results;
            res.json(juegos);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
}

const createCar = (req, res) => {
    try {
        const car_id = req.params.id;
        const juego_id = req.params.j_id;
        connection.query('INSERT INTO carrito_juegos(id_car, j_id) VALUES (?, ?)', [car_id, juego_id]);

    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
}

const deleteGameCar = (req, res) => {
    try {
        const car_id = req.params.id;
        const juego_id = req.params.j_id;
        connection.query('DELETE FROM carrito_juegos WHERE id_car = ? AND j_id = ?', [car_id, juego_id]);
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const deleteCar = (req, res) => {
    try {
        const car_id = req.params.id;
        connection.query('DELETE FROM carrito_juegos WHERE id_car = ?', [car_id]);
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
}

module.exports = {createCar, getCar, deleteGameCar, deleteCar, getGamesCar}