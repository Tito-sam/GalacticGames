var express = require('express');
var router = express.Router();
const {getUsers, createUsers, updateUser, getUser, deleteUser, loginUser, closeUser, RegisterUser} = require('../controllers/users.controller.js')

router.get('/users', getUsers);
router.post('/users', createUsers);
router.post('/users/login', loginUser);
router.post('/users/register', RegisterUser);
router.get('/users/login', (req, res) => {
    res.render('login');
});
router.get('/users/close', closeUser);
router.get('/users/:id', getUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);



module.exports = router;
