const resultado = document.querySelector('#resultado'),
    formulario = document.querySelector('#formulario')

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarBusqueda)
})

function validarBusqueda(e) {
    e.preventDefault()
    const busqueda = document.querySelector('#busqueda').value
    busqueda.length < 3
        ? mostrarMensaje('Busqueda demaciado corta')
        : consultarAPI(busqueda)
}

function mostrarMensaje(mensaje) {
    const hayMensaje = document.querySelector('.alerta')
    if (!hayMensaje) {
        const alerta = document.createElement('div')
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta')
        alerta.textContent = mensaje

        formulario.appendChild(alerta)
        setTimeout(() => {
            alerta.remove()
        }, 2000);
    }
}

function consultarAPI(busqueda) {
    const githubUrl = `https://jobs.github.com/positions.json?search=${busqueda}`
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(githubUrl)}`
    axios.get(url)
        .then(resolve => mostrarVacantes(JSON.parse(resolve.data.contents)))
        .catch(console.log('hubo un error'))
}

function mostrarVacantes(vacantes) {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
    if (vacantes !== 0) {
        resultado.classList.add('grid')
        vacantes.forEach(vacante => {
            const { company } = vacante
            resultado.innerHTML += `
            <divclass="shadow bg-write p-6 rounded ">
                <h2 class="text-2x1 font-light mb-4">${company}</h2>
            </div>
            `
        })
    }


}