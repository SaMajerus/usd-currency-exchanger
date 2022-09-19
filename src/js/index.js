import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import convertCurrency from './exchange.js'; 
import {calcConv} from './calculate.js'; 

/*     UI Logic     */ 
function handleFormSubmission(event) {
  event.preventDefault(); 
  document.querySelector('#showResult').innerText = null;  //Clears the response section (in case anything is there from a previous event.)
  
  //Storage vars for input values
  const amtInput = document.querySelector('input#usd-amt-input').value;  //The value entered by the user (presumably a numerical amount in USD). 
  const convertTo = document.querySelector('select#tgt-for-conv').value; 
  let convRate; //Stores the retval from 'getConvRate'. 

  if (!(convertTo === "0")){
    if (typeof amtInput === Number){
      document.querySelector('input#usd-amt-input').value = null; 
      document.querySelector('select#tgt-for-conv').value = "0";  
      convRate = convertCurrency.getConvRate(convertTo, amtInput);  
    } else {
      document.querySelector("#showResult").innerText = "Invalid input for USD value. Please try again.";  
    }
  } else {
    document.querySelector("#showResult").innerText = "Invalid choice for currency. Please try again."; 
  } 
  console.log("Value for 'convRate' is:  " + convRate);
  let convertedAmtRetval = calcConv(convRate, amtInput);  //Stores retval from business logic function. 
  document.querySelector('#showResult').innerText = convertedAmtRetval;  
}

window.addEventListener("load", function() { 
  document.querySelector('form#user-input').addEventListener("submit", handleFormSubmission);
});
