// Seletores principais
const convertButton = document.querySelector(".convert-button");
const fromCurrency = document.querySelector(".currency-select");
const toCurrency = document.querySelector(".currency-select2");

// Taxas de câmbio fixas
const rates = {
  BRL: 1,
  USD: 5.38,
  EUR: 6.23,
  GBP: 7.07,
  BTC: 593621.97
};

// Função principal
function convertValues() {
  const inputValue = parseFloat(document.querySelector("#input-currency").value);

  if (isNaN(inputValue)) {
    alert("Digite um valor válido");
    return;
  }

  const valueInBRL = inputValue * rates[fromCurrency.value];
  const finalValue = valueInBRL / rates[toCurrency.value];

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value-dolar");

  // Atualiza valor de origem
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: fromCurrency.value
  }).format(inputValue);

  // Atualiza valor convertido
  currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: toCurrency.value
  }).format(finalValue);
}

// Atualiza nome/imagem da moeda de destino
function changeCurrencyTo() {
  const currencyName = document.getElementById("currency-names");
  const currencyImg = document.querySelector(".currency-class-img");

  if (toCurrency.value === "USD") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/dolar.png";
  } if (toCurrency.value === "EUR") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  } else if (toCurrency.value === "GBP") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImg.src = "./assets/libra.png";
  } else if (toCurrency.value === "BRL") {
    currencyName.innerHTML = "Real";
    currencyImg.src = "./assets/real.png";
  } else if (toCurrency.value === "BTC") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  };

  convertValues(); // atualiza valor ao trocar moeda
}

// Atualiza nome/imagem da moeda de origem
function changeCurrencyFrom() {
  const currencyName = document.getElementById("currency-name-from");
  const currencyImg = document.querySelector(".currency-class-img-from");

  if (fromCurrency.value === "USD") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/dolar.png";
  } else if (fromCurrency.value === "EUR") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  } else if (fromCurrency.value === "GBP") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImg.src = "./assets/libra.png";
  } else if (fromCurrency.value === "BRL") {
    currencyName.innerHTML = "Real";
    currencyImg.src = "./assets/real.png";
  } else (fromCurrency.value === "BTC"); {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  };

  convertValues();
}

// Eventos
convertButton.addEventListener("click", convertValues);
toCurrency.addEventListener("change", changeCurrencyTo);
fromCurrency.addEventListener("change", changeCurrencyFrom);