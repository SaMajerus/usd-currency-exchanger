import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {getConvRate} from './exchange.js'; 

/*     UI Logic     */ 
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

function handleFormSubmission(event) {
  event.preventDefault(); 
  const amtInput = document.querySelector('input#usd-amt-input').value; 
  const convertTo = document.querySelector('select#tgt-for-conv').value; 
  document.querySelector('input#usd-amt-input').value = null; 
  document.querySelector('select#tgt-for-conv').value = "0"; 
  document.querySelector('div#input-amt-storage').innerHTML = amtInput; //Stores the USD-amount input by user, so it can be accessed later (bypassing any potential scoping issues we would otherwise have). 
  getConvRate(convertTo); 
}

window.addEventListener("load", function() {
  document.querySelector('form#user-input').addEventListener("submit", handleFormSubmission);
});
