const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputCurrency = document.querySelector("#input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value-dolar"); // Outras moedas

    const dolarToday = 5.2;

    const convertedValue = inputCurrency / dolarToday;

    inputCurrencyValueToConvert.innerHTML = currencyValueToConvert

    console.log(convertedValue); // mostra o valor convertido
}

convertButton.addEventListener("click", convertValues);