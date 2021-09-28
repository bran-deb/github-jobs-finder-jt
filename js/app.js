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
        : mostrarMensaje(busqueda)
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