import './css/styles.css';
import ExchangeRate from './exchange-rate.js';

function getExchangeRate(currentAmount, exchangedAmount) {
  ExchangeRate.getExchangeRate()
    .then(function(response) {
      if (response.result === "success") {
        printExchange(currentAmount, exchangedAmount);
      } else {
        printError(exchangedAmount);
      }
    });
}

function printExchange(currentAmount, exchangedAmount) {
  console.log(`${currentAmount} USD is equivalent to ${exchangedAmount} in another currency.`);
}

function printError() {
  console.error("An error occurred while trying to retrieve the exchange rate.");
}

window.addEventListener("load", function(){
  getExchangeRate();
});