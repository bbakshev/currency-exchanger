export default class ExchangeRate {  
  static getExchangeRate() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw new Error(`Failed to fetch exchange rate.`);
        }
        return response.json();
      });
  }
}