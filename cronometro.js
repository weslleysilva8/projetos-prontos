// Seleciona os elementos do DOM
var number = 0
let cronometro 
let h2 = document.querySelector("h2")
const timerDisplay = document.querySelector(h2);
function start(){
        cronometro = setInterval( function(){
            number++
            h2.innerText = number
        }, 1000)
    }

     function stop() {
        cronometro = clearInterval(cronometro);
    }
   