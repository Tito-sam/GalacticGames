const register = document.querySelector('#register')
const btnRegister = document.querySelector('#btn-register')

const registerUser = () => {
    let email = document.querySelector('#email').value
    let contraseña = document.querySelector('#password').value
    let usuario = document.querySelector('#usuario').value
    let nombres = document.querySelector('#nombres').value
    let apellidos = document.querySelector('#apellidos').value
    let confirmEmail = document.querySelector('#confirm_email').value
    let confirmPassword = document.querySelector('#confirm_password').value
    console.log(email,contraseña)
    let data = `{
        "usuario":"${usuario}",
        "nombres":"${nombres}",
        "apellidos":"${apellidos}",
        "email": "${email}",
        "confirm_email":"${confirmEmail}",
        "password": "${contraseña}",
        "confirm_password":"${confirmPassword}"
    }`;

    data = JSON.stringify(JSON.parse(data));
    const request = new Request('/users/register', {
        method:'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:data
    })
    fetch(request)
    .then(res => {
        console.log(res)
        if(res.ok) {
            window.location.href = res.url;
        } else {
            return res.json()
        }
    })
    .then(data => {
        const error = document.querySelector('.error-login-register')
        if (error) {
            error.innerHTML = `
            <p class="error-login-register">${data.message}</p>
            `;
        } else {
            const redirect = document.querySelector('#redirect-reg-log')
            const mensajeError = document.createElement('div');
            mensajeError.innerHTML = `
                <p class="error-login-register">${data.message}</p>
            `;
            register.insertBefore(mensajeError, redirect);
        }    
    
    })
    .catch(err => console.log(err))
}

btnRegister.addEventListener('click', registerUser);