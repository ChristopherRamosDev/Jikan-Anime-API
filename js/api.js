import * as UI from './ui.js';


class API {
    constructor(name, type) {
        this.name = name
        this.type = type

    }

    buscarApi() {
        const url = `https://api.jikan.moe/v3/search/${this.type}?q=${this.name}&limit=20`
        this.spinner()
        setTimeout(() => {
            fetch(url)
                .then(resp => resp.json())
                .then(data => this.mostrarResultados(data.results))
        }, 1000);

    }
    mostrarResultados(results) {

        let html = ''

        results.forEach(result => {

            const { url, image_url, title, score } = result

            html += `
                             
             <div class="mostrar">
             <a href = ${url} target="_blank">
                 <div class="card_image"><img src=${image_url}/></div>
                 <div class="card_name"><p>${title}</p></div>
                 <div class="puntaje"><p>Puntaje: ${score}</p></div>
                 </a>                       
             </div>`;
        })

        UI.resultado.innerHTML = html
    }

    spinner() {

        this.limpiarHtml()
        const spinner = document.createElement('div')
        spinner.classList.add('sk-fading-circle')

        spinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>   
        `;


        UI.resultado.appendChild(spinner)
    }

    limpiarHtml() {
        while (UI.resultado.firstChild) {
            UI.resultado.removeChild(UI.resultado.firstChild)
        }
    }
}


export default API;