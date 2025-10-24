// Seleciona os elementos do DOM
let horas = 0
let minutos = 0
let segundos = 0
let centesimos = 0
let cronometro = null
const display = document.getElementById("display")

function atualizarDisplay() {
    let h = horas < 10 ? "0" + horas : horas
    let m = minutos < 10 ? "0" + minutos : minutos
    let s = segundos < 10 ? "0" + segundos : segundos
    let cs = centesimos < 10 ? "0" + centesimos : centesimos
    display.innerText = `${h}:${m}:${s}:${cs}`
}


function start() {

    if (cronometro !== null) {
        console.log("O cronômetro já está em execução.");
        return; // Sai da função se o cronômetro já estiver em execução
    }
    cronometro = setInterval(function () {
        centesimos++
        if (centesimos >= 100) {
            centesimos = 0
            segundos++
        }
        if (segundos >= 60) {
            segundos = 0
            minutos++
        }
        if (minutos >= 60) {
            minutos = 0
            horas++
        }
        atualizarDisplay()
    }, 10) // intervalo de 10 milissegundos (0,01 segundo)
}

function stop() {

    if (cronometro !== null) {
        clearInterval(cronometro);
        cronometro = null;
    } else {
        console.log("O cronômetro não está em execução.");
    }

}

function restart() {
    clearInterval(cronometro)
    cronometro = null
    horas = 0;
    minutos = 0;
    segundos = 0;
    centesimos = 0;
    atualizarDisplay(); // mostra 00:00:00:00 novamente
    console.log("Cronômetro reiniciado.");
    const listaMarcas = document.getElementById("lista-marcas");
    if (listaMarcas) {
        listaMarcas.innerHTML = ""; // Limpa a lista de marcas
    }
}

function marcar() {
    if (cronometro !== null) {
        console.log(`Marca: ${display.innerText}`);
    } else {
        console.log("O cronômetro não está em execução.");
    }
    const listaMarcas = document.getElementById("lista-marcas");
    listaMarcas.innerHTML += `<li>🚩${display.innerText}</li>`;
}