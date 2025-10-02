const drawButton = document.querySelector(".drawButton");

function generateNumber (){
    const min = Math.ceil (document.querySelector(".input-min").value)
    const max = Math.floor (document.querySelector(".input-max").value)
    return Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(min, max)
}
drawButton.addEventListener("click", generateNumber)
 