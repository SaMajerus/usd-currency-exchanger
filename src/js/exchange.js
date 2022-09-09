/*     'API Call Service' Logic     */ 
export function getConvRate(target) {  //'target' currency for conversion (the 'to' in "from -> to") is passed into fn. 
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target}`; 

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, target); 
    } else { 
      printError(this, response, target); 
    }
  });

  request.open("GET", url, true);
  request.send();
}

function printElements(apiResponse, tgt) { 
  let userInputAmt = parseFloat(document.querySelector('div#input-amt-storage').innerHTML); 
  let convertedAmt; 
  convertedAmt = userInputAmt * apiResponse.conversion_rate; 
  document.querySelector('p#showConvertedAmt').innerText = `The conversion rate from USD to ${tgt} is ${apiResponse.conversion_rate}. 
  Thus, the result of exchanging $${userInputAmt}USD for ${tgt} =    ${convertedAmt} ${tgt}.`; 
}

function printError(request, apiResponse, tgt) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the conversion rate for ${tgt}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}