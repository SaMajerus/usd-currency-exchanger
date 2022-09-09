/*     'API Call Service' Logic     */ 
export function getConvRate(target, inputAmt) {  //'target' currency for conversion (the 'to' in "from -> to") is passed into fn. 
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target}`; 

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, target, inputAmt); 
    } else { 
      printError(this, response, target); 
    }
  });

  request.open("GET", url, true);
  request.send();
}

function printElements(apiResponse, tgt, amt) { 
  let userInputAmt = parseFloat(amt); 
  let convertedAmt = userInputAmt * apiResponse.conversion_rate; 
  console.log(`The conversion rate from USD to ${tgt} is ${apiResponse.conversion_rate}. 
  Thus, the result of exchanging $${userInputAmt}USD for ${tgt} =    ${convertedAmt} ${tgt}.`);
  document.querySelector('p#showResult').innerText = `The conversion rate from USD to ${tgt} is ${apiResponse.conversion_rate}. 
  Thus, the result of exchanging $${userInputAmt}USD for ${tgt} =    ${convertedAmt} ${tgt}.`; 
}

function printError(request, apiResponse, tgt) {
  document.querySelector('#showResult').innerText = `There was an error accessing the conversion rate for ${tgt}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}