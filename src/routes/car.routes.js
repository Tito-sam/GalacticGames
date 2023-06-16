var express = require('express');
var router = express.Router();
const {createCar, getCar, deleteGameCar, deleteCar, getGamesCar} = require('../controllers/car.controller.js')

router.get('/car/:id', getCar);
router.get('/car/:id/:j_id', getGamesCar);
router.post('/car/:id/:j_id', createCar);
router.delete('/car/:id/:j_id', deleteGameCar);
router.delete('/car/:id', deleteCar);

module.exports = router;
