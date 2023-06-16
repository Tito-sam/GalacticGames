var express = require('express');
var router = express.Router();
let userActive = false;
const connection = require('../db/db.js');
let user;


/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    if(req.query.id) {
      const id = req.query.id;
      connection.query('SELECT * FROM usuario WHERE user_id = ?', [id],(err, results) =>{
        if (results[0].conected == 1){
          userActive = true;
        } else {
          userActive = false;
        }
        user = results[0];
      });
    }
    setTimeout(() => res.render('index', {userActive, user}), 1000)
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});

router.get('/consolas', (req, res, next) => {
  try {
    res.render('consolas', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});


router.get('/pc', (req, res, next) => {
  try {
    res.render('pc', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});

router.get('/carrito', (req, res, next) => {
  try {
    res.render('carrito', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});

router.get('/user', (req, res, next) => {
  try {
    res.render('user', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});

router.get('/info', (req, res, next) => {
  try {
    res.render('Info', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});

router.get('/info_j', (req, res, next) => {
  try {
    res.render('info_j', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});

router.get('/login', (req, res, next) => {
  try {
    res.render('login', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});

router.get('/register', (req, res, next) => {
  try {
    res.render('register', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});

router.get('/crudjuegos', (req, res, next) => {
  try {
    res.render('crudJuegos', {userActive, user});
  } catch (error) {
    return res.status(500).render('error',{message: 'Algo ha salido mal.'});
  }
});



module.exports = router;
