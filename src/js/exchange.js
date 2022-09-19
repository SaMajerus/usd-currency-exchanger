/*     'API Call Service' Logic     */ 
export class convertCurrency {
  static getConvRate(target){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })      
      .catch(function(error) {
        return error;
      });

  }
}


/*     Business Logic     */ 
// function printElements(apiResponse, tgt, amt) { 
//   let userInputAmt = parseFloat(amt); 
//   let convertedAmt = userInputAmt * apiResponse.conversion_rate; 
//   document.querySelector('p#showResult').innerText = `The conversion rate from USD to ${tgt} is ${apiResponse.conversion_rate}. 
//   Thus: $${userInputAmt} USD =   ${convertedAmt} ${tgt}.`; 
// }

// function printError(request, apiResponse, tgt) {
//   document.querySelector('#showResult').innerText = `There was an error accessing the conversion rate for ${tgt}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
// }