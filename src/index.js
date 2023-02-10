import './css/styles.css';
import ExchangeRate from './exchange-rate.js';

function getExchangeRate() {
  ExchangeRate.getExchangeRate()
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    });
}

window.addEventListener("load", function(){
  getExchangeRate();
});