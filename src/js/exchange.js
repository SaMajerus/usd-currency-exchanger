/*     'API Call Service' Logic     */ 
export default class ConvertCurrency {
  static async getConvRate(target) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      }) 
      .then(function(response) {
        return response;
      })     
      .catch(function(error) {
        return error;
      }); 
  }
}
