const connection = require('../db/db.js');

const getGames = (req, res) => {
    try {
        connection.query('SELECT * FROM juegos', (err, results) => {
            res.json(results);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
};

const getCategories = (req, res) => {
    try {
        connection.query('SELECT * FROM categorias', (err, results) => {
            res.json(results);
        });
        
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
};


const getPlatforms =  (req, res) => {
    try {
        connection.query('SELECT * FROM plataformas', (err, results) => {
            res.json(results);
        });
        
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
};


const createGames =  (req, res) => {
    try {
        const {nombre, slug, precio, imagen, rating} = req.body;
        connection.query('INSERT INTO juegos(nombre, slug, precio, imagen, rating) VALUES (?, ?, ?, ?, ?)', [nombre, slug, precio, imagen, rating], (error, consult) => {
            console.log(error, consult);
            res.json(req.body);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
};

const getGame = async (req, res) => {
    try {
        connection.query('SELECT * FROM juegos WHERE j_id = ?', [req.params.id],(err, results) => {
            if (results.length <= 0) {
                return res.status(404).json({
                    message: 'Juego no encontrado.'
                })
            }
            res.json(results[0]);
        });
        
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const getGameRanting = (req, res) => {
    try {
        connection.query('SELECT * FROM juegos WHERE rating >= ?', [req.params.rating], (err, results) => {
            if (results[0].length <= 0) {
                return res.status(404).json({
                    message: 'Juego no encontrado.'
                })
            }
            res.json(results);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const getGamePrecio = (req, res) => {
    try {
        connection.query('SELECT * FROM juegos WHERE precio <= ?', [req.params.precio], (err, results) => {
            if (results[0].length <= 0) {
                return res.status(404).json({
                    message: 'Juego no encontrado.'
                })
            }
            res.json(results);
        });
        
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const updateGame = (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, slug, precio, imagen, rating} = req.body;
        connection.query('UPDATE juegos SET nombre = IFNULL(?, nombre), slug = IFNULL(?, slug), precio = IFNULL(?, precio), imagen = IFNULL(?, imagen), rating = IFNULL(?, rating) WHERE j_id = ?', [nombre, slug, precio, imagen, rating, id], (err, results) => {
            if (consult.affectedRows <= 0) {
                return res.status(404).json({
                    message: 'Juego no encontrado.'
                })
            }
            res.json({message: 'Juego Actualizado'});
        });
        
        connection.query('SELECT * FROM juegos where j_id = ?', [parseInt(req.params.id)], (err, results) => {
            res.json(game[0]);
        });
        
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const deleteGame = (req, res) => {
    try {
        const {id} = req.params;
        const [consult] = connection.query('DELETE FROM juegos where j_id = ?', [parseInt(req.params.id)], (err, results) => {
            if (consult.affectedRows <= 0) {
                return res.status(404).json({
                        message: "Juego no encontrado."
                    })
            }
            res.json({message:'Juego Eliminado'});
        });
        
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}


const categoriasJuegos =  (req, res) => {
    try {
        const nombre_juego = req.body.juego;
        const nombre_categoria = req.body.categoria;
        connection.query('SELECT j_id FROM juegos WHERE nombre = ?', [nombre_juego], (err, results) => {
            const j_id = results; 
            connection.query('SELECT c_id FROM categorias WHERE nombre = ?', [nombre_categoria], (err, results) => {
                const c_id = results;
                connection.query('INSERT INTO categ_juegos(j_id, c_id) VALUES (?, ?)', [j_id[0], c_id[0]], (err, results) => {
                    res.json({message: 'Categoria agregada'});
                })
            }); 
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const plataformasJuegos =  (req, res) => {
    try {
        const nombre_juego = req.body.juego;
        const nombre_plataforma = req.body.plataforma;
        connection.query('SELECT j_id FROM juegos WHERE nombre = ?', [nombre_juego], (err, results) => {
            const j_id = results;
            connection.query('SELECT id_p FROM plataformas WHERE nombre = ?', [nombre_plataforma], (err, results) => {
                const id_p = results;
                const consult =  connection.query('INSERT INTO plat_juegos(j_id, id_p) VALUES (?, ?)', [j_id[0], id_p[0]], (err, results) => {
                    res.json({message: 'Plataforma agregada'});
                })
            });
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
    
}

const cargarJuegosPc = (req, res) => {
    try {
        connection.query('SELECT j_id FROM plat_juegos WHERE id_p < ?', [4],(err, results) => {
            if (!err) {
                const id_juegos = results.map( juegos  => juegos.j_id);
                res.json(id_juegos);
            }else {
                console.log(err)
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }

}

const cargarJuegosC = (req, res) => {
    try {
        connection.query('SELECT j_id FROM plat_juegos WHERE id_p > ?', [3],(err, results) => {
            if (!err) {
                const id_juegos = results.map( juegos  => juegos.j_id);
                res.json(id_juegos);
            }else {
                console.log(err)
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
};

const cargarJuegosCategorias = (req, res) => {
    try {
        let c_id = req.params.id;
        console.log(c_id)
        connection.query('SELECT j_id FROM categ_juegos WHERE c_id = ?', [c_id],(err, results) => {
            if (!err) {
                const id_juegos = results.map( juegos  => juegos.j_id);
                console.log(id_juegos);
                res.json(id_juegos);
            }else {
                res.status(404).json({message: 'No hay juegos en esta Categoria'});
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

const cargarJuegosPlataformas = (req, res) => {
    try {
        let id_p = req.params.id;
        connection.query('SELECT j_id FROM plat_juegos WHERE id_p = ?', [id_p],(err, results) => {
            if (!err) {
                const id_juegos = results.map( juegos  => juegos.j_id);
                console.log(id_juegos);
                res.json(id_juegos);
            }else {
                res.status(404).json({message: 'No hay juegos en esta Plataforma'});
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

const cargarJuegosPrecio = (req, res) => {
    try {
        let precioMin = req.params.precioMin;
        let precioMax = req.params.precioMax;
        connection.query('SELECT j_id FROM juegos WHERE precio > ? AND precio <= ?', [precioMin, precioMax],(err, results) => {
            if (!err) {
                const id_juegos = results.map( juegos  => juegos.j_id);
                console.log(id_juegos);
                res.json(id_juegos);
            }else {
                res.status(404).json({message: 'No hay juegos en esta Plataforma'});
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}


module.exports = {createGames, getGames, getGame, updateGame, deleteGame, getGameRanting, getGamePrecio, getCategories, getPlatforms, categoriasJuegos, plataformasJuegos, cargarJuegosPc, cargarJuegosC, cargarJuegosCategorias, cargarJuegosPlataformas, cargarJuegosPrecio};