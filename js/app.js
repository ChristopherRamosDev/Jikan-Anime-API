import * as UI from './ui.js';
import API from './api.js'
UI.form.addEventListener('submit', buscarAnime)


function buscarAnime(e) {
    e.preventDefault()
    const name = document.querySelector('.search').value
    const type = document.querySelector('.type').value

    if (name === '') {
        showMesaje('Debe llenar todos los campos')
        return
    }
    else if (name.length < 3) {
        showMesaje('Debe ingresar minimo 3 caracteres')
        return
    }


    const busqueda = new API(name, type)
    busqueda.buscarApi()

}


function showMesaje(mensaje) {

    UI.alerta.innerHTML = mensaje;
    UI.alerta.classList.add('error')

    setTimeout(() => {
        UI.alerta.innerHTML = '';
        UI.alerta.classList.remove('error')
    }, 2000);

}