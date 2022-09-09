/*     'API Call Service' Logic     */ 
export function getConvRate(target, inputAmt) {  //'target' currency for conversion (the 'to' in "from -> to") is passed into fn. 
  let promise = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target}`; 

    request.addEventListener("loadend", function() {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve([response, target, inputAmt]);
        //printElements(response, target); 
      } else { 
        reject(this, response, target);
        //printError(this, response, target); 
      }
    });
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(dataResponseArray) { 
    printElements(dataResponseArray); 
  }, function(errorMsg) { 
    printError(errorMsg); 
  }); 
}

function printElements(dataArr) { 
  let userInputAmt = parseFloat(dataArr[2]); 
  let convertedAmt; 
  //convertedAmt= userInputAmt * apiResponse.conversion_rate;
  convertedAmt = userInputAmt * dataArr[0][9]; 
  document.querySelector('p#showResult').innerText = `The conversion rate from USD to ${dataArr[1]} is ${dataArr[0][9]}. 
  Thus, the result of exchanging $${userInputAmt}USD for ${dataArr[1]} =    ${convertedAmt} ${dataArr[1]}.`; 
}

/*
function printElements(apiResponse) {  //This 1-parameter version of the finished function (above) was created for use in Jest tests (at least, that's the idea).
  const returnedR8 = apiResponse.conversion_rate; 
  return returnedR8;  
}
*/

function printError(request, apiResponse, tgt) {
  document.querySelector('#showResult').innerText = `There was an error accessing the conversion rate for ${tgt}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}