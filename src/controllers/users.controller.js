const connection = require('../db/db.js');

const getUsers = (req, res) => {
    try {
        connection.query('SELECT * FROM usuario', (err, results) => {
            res.json(results);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
};


const createUsers = (req, res) => {
    try {
        const {usuario, nombres, apellidos, email, contraseña} = req.body;
        connection.query('INSERT INTO usuario(usuario, nombres, apellidos, email, contraseña) VALUES (?, ?, ?, ?, ?)', [usuario, nombres, apellidos, email, contraseña], (err, results) => {
            res.json(req.body);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
};

const getUser = (req, res) => {
    try {
        connection.query('SELECT * FROM usuario WHERE user_id = ?', [req.params.id], (err, results) => {
            if (results.length <= 0) {
                return res.status(404).json({
                    message: 'Usuario no encontrado.'
                })
            }
            res.json(results);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const updateUser = (req, res) => {
    try {
        const {id} = req.params;
        const {usuario, nombres, apellidos, email, password} = req.body;
       if(password !=null && password.length > 7) {
            connection.query('UPDATE usuario SET usuario = IFNULL(?, usuario), nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), email = IFNULL(?, email), contraseña = IFNULL(?, contraseña) WHERE user_id = ?', [usuario, nombres, apellidos, email, password, id], async (err, results, fields) => {
                if (err) {
                    return res.status(404).json({
                        message: 'No se ha podido Actualizar',
                        update: false
                    })
                }
                connection.query('SELECT * FROM usuario WHERE user_id = ?', [req.params.id], (err, results) => {
                    res.json({message: "Los datos han sido actualizados, para confirmar por favor cierre su cuenta y vuelva a entrar.",update: true});
                });
            });
       } else {
            return res.status(404).json({
                message: 'No se ha podido Actualizar, la contraseña es muy corta.',
                update: false
            })
       }
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const deleteUser = (req, res) => {
    try {
        const {id} = req.params;
        connection.query('DELETE FROM usuario WHERE user_id = ?', [req.params.id], (err, results) =>{
            console.log(results);
            if (results.affectedRows <= 0) {
                return res.status(404).json({
                        message: "Usuario no encontrado."
                    })
            }
            res.send('Usuario Eliminado');
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}


const loginUser = (req, res) => {
    try {
        const {email, password} = req.body;
        connection.query('SELECT * FROM usuario WHERE email = ? and contraseña = ?', [email, password], async (err, results) => {
            if (results.length <= 0) {
                res.status(404).json({
                    message: "Esta mal el correo o la contraseña, o no existe el usuario.",
                    login: false
                })
            } else {
                connection.query('UPDATE usuario SET conected = ? WHERE user_id = ?', [1, results[0].user_id]);
                res.redirect(`/?id=${results[0].user_id}`);
            }
            
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

const closeUser = (req, res) => {
    try {
        id = req.query.id;
        connection.query('SELECT * FROM usuario WHERE user_id = ?', [id], async (err, results) => {
            connection.query('UPDATE usuario SET conected = ? WHERE user_id = ?', [0, id]);
            res.redirect(`/?id=${results[0].user_id}`);
        });
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
    
    
}

const RegisterUser = (req, res) => {
    try {
        const {usuario, nombres, apellidos, email, confirm_email, password, confirm_password} = req.body;
        if (usuario != '' && nombres != '' && apellidos != '' && email != '' && password != '') {
            if (email === confirm_email && password === confirm_password ) {
                if(password.length > 7) {
                    console.log('err2')
                    connection.query('SELECT * FROM usuario WHERE email = ? and contraseña = ?', [email, password], async (err, results) => {
                        console.log('err3')
                        if(results.length <= 0) {
                            connection.query('INSERT INTO usuario(usuario, nombres, apellidos, email, contraseña) VALUES (?, ?, ?, ?, ?)', [usuario, nombres, apellidos, email, password]);
                            connection.query('SELECT * FROM usuario WHERE email = ? and contraseña = ?', [email, password], async (err, results) => {
                                connection.query('INSERT INTO carrito(id_car) VALUES (?)', [results[0].user_id]);
                                connection.query('UPDATE usuario SET conected = ? WHERE user_id = ?', [1, results[0].user_id]);
                                res.redirect(`/?id=${results[0].user_id}`);
                            });  
                        }
                    });
                } else {
                    res.status(404).json({message: 'La clave es muy corta'});
                }
            }
            else {
                res.status(404).json({
                    message: 'Los valores email y contraseña no son iguales.'
                })
            }
        } else {
            res.status(404).json({
                message: 'Debe ingresar todos los valores.'
            })
        }
    } catch (error) {
        return res.status(500).render('error',{message: 'Algo ha salido mal.'});
    }
}

module.exports = {getUsers, createUsers, getUser, updateUser, deleteUser, loginUser, closeUser, RegisterUser};