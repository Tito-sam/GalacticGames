const actualizarDatos = document.querySelector('.actualizar_datos')
const BtnActualizar = document.querySelector('#btn_actualizar_datos')

const datosUsuario = document.querySelector('.datos_usuario');

const obtenerDatos = () => {
    const user = document.querySelector('.userNav');
    const user_id = user.id;
    const request = new Request(`/users/${user_id}`, {
        method:'GET'
    })
    fetch(request)
    .then(res => res.json())
    .then(data => {
        const user = data[0];
        datosUsuario.innerHTML = `
            <h2>Datos del Usuario</h2>
            <p class="info_user">Usuario: ${user.usuario}</p>
            <p class="info_user">Nombres: ${user.nombres}</p>
            <p class="info_user">Apellidos: ${user.apellidos}</p>
            <p class="info_user">Email: ${user.email}</p>
        `
    })
    .catch(err => console.log(err));
}

obtenerDatos();


const updateUser = () => {
    let email = document.querySelector('#email');
    let contraseña = document.querySelector('#password')
    let usuario = document.querySelector('#usuario')
    let nombres = document.querySelector('#nombres')
    let apellidos = document.querySelector('#apellidos')
    
    let data = {
        usuario: usuario.value == '' ? null : `${document.querySelector('#usuario').value}`,
        nombres: nombres.value == '' ? null : `${document.querySelector('#nombres').value}`,
        apellidos: apellidos.value == '' ? null : `${document.querySelector('#apellidos').value}`,
        email: email.value == '' ? null : `${document.querySelector('#email').value}`,
        password: contraseña.value == '' ? null : `${document.querySelector('#password').value}`,
    };
    data = JSON.stringify(data);
    const user = document.querySelector('.userNav');
    const user_id = user.id;
    const request = new Request(`/users/${user_id}`, {
        method:'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:data
    })
    fetch(request)
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        if (data.update == true) {
            const mensajeError = document.createElement('div');
            mensajeError.innerHTML = `
                <p class="ok-update">${data.message}</p>
            `;
            actualizarDatos.insertBefore(mensajeError, BtnActualizar);
        } else {
            const error = document.querySelector('.error-update')
            if (error) {
                error.innerHTML = `
                    <p class="error-update">${data.message}</p>
                `;
            } else {
                const mensajeError = document.createElement('div');
                mensajeError.innerHTML = `
                    <p class="error-update">${data.message}</p>
                `;
                actualizarDatos.insertBefore(mensajeError, BtnActualizar);
            }
        }    
    
    })
    .catch(err => console.log(err))
}

BtnActualizar.addEventListener('click', updateUser);