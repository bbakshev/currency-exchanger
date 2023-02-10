import './css/styles.css';
import ExchangeRate from './exchange-rate.js';
import {CurrencyCode} from './country-code.js';

// Business Logic
function getExchangeRate(enterAmount, exchangedAmount) {
  ExchangeRate.getExchangeRate()
    .then(function(response) {
      if (response.result === "success") {
        const exchangeRate = response.conversion_rates[exchangedAmount];
        const convertedAmount = enterAmount * exchangeRate;
        printExchange(enterAmount, convertedAmount, exchangedAmount);
      } else {
        printError(response);
      }
    });
}

// UI Logic
function printExchange(enterAmount, exchangedAmount, convertedSymbol) {
  document.getElementById('exchanged-rate').innerHTML = `${enterAmount} USD is equivalent to ${exchangedAmount} ${convertedSymbol}.`;
}

function printError(error) {
  document.getElementById('exchanged-rate').innerHTML = error;
}

function populateCurrencySelectFrom() {
  const selectElement = document.getElementById('currency-from');
  CurrencyCode.forEach(function(code){
    const optionElement = document.createElement("option");
    optionElement.value = code[0];
    optionElement.textContent = `${code[0]} - ${code[1]}`;
    selectElement.appendChild(optionElement);
  });
}

function populateCurrencySelectTo() {
  const selectElement = document.getElementById('currency-to');
  CurrencyCode.forEach(function(code){
    const optionElement = document.createElement("option");
    optionElement.value = code[0];
    optionElement.textContent = `${code[0]} - ${code[1]}`;
    selectElement.appendChild(optionElement);
  });
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currentAmount = document.getElementById('amount').value;
  const exchangedAmount = document.getElementById('currency-to').value.toUpperCase();
  getExchangeRate(currentAmount, exchangedAmount);

}

window.addEventListener("load", function(){
  populateCurrencySelectFrom();
  populateCurrencySelectTo();
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});