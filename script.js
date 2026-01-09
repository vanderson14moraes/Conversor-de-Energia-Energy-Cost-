const select = document.querySelector('#select')
const potencia = document.querySelector('#valor-potencia')
const horasDeUso = document.querySelector('#horas-de-uso')
const valorKwh = document.querySelector('#valor-do-kwh')
const button = document.querySelector('.button-one button')

// Resultados na tela
const consumoDiario = document.querySelector('.numero-verde-one')
const consumoSemanal = document.querySelector('.numero-verde-two')
const consumoMensal = document.querySelector('.numero-verde-three')

function calcularCustoEnergia() {
    
    if (potencia.value === "" || horasDeUso.value === "" || valorKwh.value === "") {
        alert("Ops! Preencha todos os campos para calcular.");
        return;
    }

    let potenciaReal = 0
    if (select.value === 'day') {
        potenciaReal = parseFloat(potencia.value) / 1000

    } else if (select.value === 'month') {
        potenciaReal = parseFloat(potencia.value) / 30
    }
    potenciaReal = potenciaReal * parseFloat(horasDeUso.value) * parseFloat(valorKwh.value)

    consumoDiario.innerHTML = "R$: " + potenciaReal.toFixed(2)
    consumoSemanal.innerHTML = "R$: " + (potenciaReal * 7).toFixed(2)
    consumoMensal.innerHTML = "R$: " + (potenciaReal * 30).toFixed(2)
}

button.addEventListener('click', calcularCustoEnergia)