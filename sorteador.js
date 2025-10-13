const drawButton = document.querySelector(".drawButton");
let sorteado = false

function generateNumber (){
    const min = Math.ceil (document.querySelector(".input-min").value)
    const max = Math.floor (document.querySelector(".input-max").value)
    const result = Math.floor (Math.random() * (max - min + 1)) + min
    document.getElementById("Resultado").innerHTML = `O número sorteado foi: <strong>${result}</strong>`
    if (!sorteado) {
        drawButton.innerHTML = "Sortear novamente"
    }
    if (min >= max) {
        document.getElementById("Resultado").innerHTML = `O valor mínimo não pode ser maior ou igual ao valor máximo.`
        return
    }
}
drawButton.addEventListener("click", generateNumber)
 