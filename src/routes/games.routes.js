var express = require('express');
var router = express.Router();
const {getGames, createGames, getGame, updateGame, deleteGame, getGameRanting, getGamePrecio, getCategories, getPlatforms, categoriasJuegos, plataformasJuegos, cargarJuegosPc, cargarJuegosC, cargarJuegosCategorias, cargarJuegosPlataformas, cargarJuegosPrecio} = require('../controllers/games.controller.js');

router.get('/games', getGames);
router.post('/games', createGames);
router.get('/games/categorias', getCategories);
router.get('/games/cargarJuegosPc', cargarJuegosPc);
router.get('/games/cargarJC/:id', cargarJuegosCategorias);
router.get('/games/cargarJP/:id', cargarJuegosPlataformas);
router.get('/games/cargarJPre/:precioMin/:precioMax', cargarJuegosPrecio);
router.get('/games/cargarJuegosC', cargarJuegosC);
router.get('/games/plataformas', getPlatforms);
router.post('/games/cargarCategorias', categoriasJuegos);
router.post('/games/cargarPlataformas', plataformasJuegos);
router.get('/games/:id', getGame);
router.get('/games/rating/:rating', getGameRanting);
router.get('/games/precio/:precio', getGamePrecio);
router.patch('/games/:id', updateGame);
router.delete('/games/:id', deleteGame);


module.exports = router;