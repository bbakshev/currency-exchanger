export default class ExchangeRate {  
  static getExchangeRate() {
    const exchangeFrom = document.getElementById('currency-from').value.toUpperCase();
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${exchangeFrom}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error){
        return error;
      });
  }
}