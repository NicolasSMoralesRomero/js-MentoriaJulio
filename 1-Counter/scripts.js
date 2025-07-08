// Tu codigo aca:

// Obtengo el elemento html por el ID
let suma = document.getElementById("increment");
let resta = document.getElementById("decrement");
let reinicio = document.getElementById("reset");
let contador = document.getElementById("counter");

resta.setAttribute("disabled", true)
reinicio.setAttribute("disabled", true)


// Creo las funciones
function sumar() {

    let numero = parseInt(contador.innerHTML);

    numero++ //(Si quiero sumar de a 3, seria numero = numero + 3 )
    resta.removeAttribute("disabled")
    reinicio.removeAttribute("disabled")

    contador.innerHTML = numero
}

function restar() {

    let numero = parseInt(contador.innerHTML);

    if (numero > 1) {
        numero--
        contador.innerHTML = numero
    }else{
        contador.innerHTML = 0
        resta.setAttribute("disabled", true)
        reinicio.setAttribute("disabled", true)
    }

    // numero > 0 && numero-- (solucion sin if)
    
}

function reset() {
    contador.innerHTML = 0
    resta.setAttribute("disabled", true)
    reinicio.setAttribute("disabled", true)
}


// Creo el evento "click" a los botones

suma.addEventListener("click", sumar)
resta.addEventListener("click", restar)
reinicio.addEventListener("click", reset)





