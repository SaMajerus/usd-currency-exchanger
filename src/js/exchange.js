/*     'API Call Service' Logic     */ 
export default class ConvertCurrency {
  static async getConvRate(target){
    console.log("This console log is being called before fetch command");
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target}`)
      .then(function(response) {
        console.log(response); 
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          console.log("Value of 'errorMessage' is:  " + errorMessage);
          throw new Error(errorMessage);
        } else {
          console.log("response value [in 'else' statement] is:  " + response);
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




/*     Business Logic (OLD)    */ 
// function printElements(apiResponse, tgt, amt) { 
//   let userInputAmt = parseFloat(amt); 
//   let convertedAmt = userInputAmt * apiResponse.conversion_rate; 
//   document.querySelector('p#showResult').innerText = `The conversion rate from USD to ${tgt} is ${apiResponse.conversion_rate}. 
//   Thus: $${userInputAmt} USD =   ${convertedAmt} ${tgt}.`; 
// }

// function printError(request, apiResponse, tgt) {
//   document.querySelector('#showResult').innerText = `There was an error accessing the conversion rate for ${tgt}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
// }