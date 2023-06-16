

const btnCerrarSesion = document.querySelector('#Cerrar_Sesion');
const user = document.querySelector('.userNav');
const user_id = user.id; 

const cerrarSesion = async() => {
    const request = new Request(`/users/close?id=${user_id}`, {
        method: 'GET'
    })
    fetch(request)
    .then(res => window.location.href = res.url)
    .catch(err => console.log(err) )
}

btnCerrarSesion.addEventListener('click', cerrarSesion);