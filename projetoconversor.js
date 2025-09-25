const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select2");
function convertValues() {
    const inputCurrency = document.querySelector("#input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value-dolar"); // Outras moedas
    console.log(currencySelect.value);
    const dolarToday = 5.37;
    const euroToday = 6.26;
    //const realToday = 1

    if (currencySelect.value === "USD") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style : "currency", currency: "USD" }).format(inputCurrency / dolarToday);
    }
    if (currencySelect.value === "EUR") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style : "currency", currency: "EUR" }).format(inputCurrency / euroToday);
    }
    //if (currencySelect.value === "BRL") {
       // currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style : "currency", currency: "BRL" }).format(inputCurrency / realToday);
    



    console.log(convertedValue); // mostra o valor convertido
};

convertButton.addEventListener("click", convertValues);