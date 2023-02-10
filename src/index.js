import './css/styles.css';
import ExchangeRate from './exchange-rate.js';

// Business Logic
function getExchangeRate(currentAmount, exchangedAmount) {
  ExchangeRate.getExchangeRate()
    .then(function(response) {
      if (response.result === "success") {
        const exchangeRate = response.conversion_rates[exchangedAmount];
        const convertedAmount = currentAmount * exchangeRate;
        printExchange(currentAmount, convertedAmount, exchangedAmount);
      } else {
        printError(response);
      }
    });
}

// UI Logic
function printExchange(currentAmount, exchangedAmount, convertedAmount) {
  document.getElementById('exchanged-rate').innerHTML = `${currentAmount} USD is equivalent to ${convertedAmount} ${exchangedAmount}.`;
}

function printError(error) {
  document.getElementById('exchanged-rate').innerHTML = error;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currentAmount = document.getElementById('amount').value;
  const exchangedAmount = document.getElementById('currency-to').value.toUpperCase();
  getExchangeRate(currentAmount, exchangedAmount);

}

window.addEventListener("load", function(){
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});