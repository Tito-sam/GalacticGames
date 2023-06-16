const login = document.querySelector('#login')
const btnLogin = document.querySelector('#btn-login')

const loginUser = () => {
    let email = document.querySelector('#email').value
    let contraseña = document.querySelector('#password').value
    let data = `{
        "email": "${email}",
        "password": "${contraseña}"
    }`;

    data = JSON.stringify(JSON.parse(data));
    const request = new Request('/users/login', {
        method:'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:data
    })
    fetch(request)
    .then(res => {
        if(res.ok) {
            window.location.href = res.url;
        } else {
            return res.json()
        }
    })
    .then(data => {
        if(data.login == false) {
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
                login.insertBefore(mensajeError, redirect);
            }
            
        }
    })
    .catch(err => console.log(err))
}

btnLogin.addEventListener('click', loginUser);

