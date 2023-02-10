import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchange-rate.js';
import {CurrencyCode} from './country-code.js';

// Business Logic
function getExchangeRate(enterAmount, exchangeRateFrom, exchangeRateTo) {
  ExchangeRate.getExchangeRate()
    .then(function(response) {
      if (response.result === "success") {
        const rateFrom = response.conversion_rates[exchangeRateFrom];
        const rateTo = response.conversion_rates[exchangeRateTo];
        if (typeof rateFrom === 'undefined' || typeof rateTo === 'undefined') {
          printError(`Sorry, the currency code ${exchangeRateFrom} or ${exchangeRateTo} is not supported by the API.`);
        } else {
          const convertedAmount = enterAmount * (rateTo/rateFrom);
          printExchange(enterAmount, convertedAmount, exchangeRateTo, exchangeRateFrom);
        }
      } else {
        printError(response);
      }
    });
}

// UI Logic
function printExchange(enterAmount, convertedAmount, exchangeRateTo, exchangeRateFrom) {
  document.getElementById('exchanged-rate').innerHTML = `${enterAmount} ${exchangeRateFrom} is equivalent to ${convertedAmount} ${exchangeRateTo}`;
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
  const exchangeFrom = document.getElementById('currency-from').value.toUpperCase();
  const exchangedAmount = document.getElementById('currency-to').value.toUpperCase();
  getExchangeRate(currentAmount, exchangeFrom, exchangedAmount);

}

window.addEventListener("load", function(){
  populateCurrencySelectFrom();
  populateCurrencySelectTo();
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});