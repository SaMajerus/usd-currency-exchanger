import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import convertCurrency from './exchange.js'; 

/*     UI Logic     */ 
function handleFormSubmission(event) {
  event.preventDefault(); 
  document.querySelector('#showResult').innerText = null;  //Clears the response section (in case anything is there from a previous event.)
  
  //Storage vars for input values
  const amtInput = document.querySelector('input#usd-amt-input').value;  //The value entered by the user (presumably a numerical amount in USD). 
  const convertTo = document.querySelector('select#tgt-for-conv').value; 
  let convertedAmt; //Stores the retval from 'getConvertedAmt'. 

  if (!(convertTo === "0")){
    if (typeof amtInput === Number){
      document.querySelector('input#usd-amt-input').value = null; 
      document.querySelector('select#tgt-for-conv').value = "0";  
      convertedAmt = parseFloat(convertCurrency.getConvAmt(convertTo, amtInput));  
    } else {
      document.querySelector("#showResult").innerText = "Invalid input for USD value. Please try again.";  
    }
  } else {
    document.querySelector("#showResult").innerText = "Invalid choice for currency. Please try again."; 
  }
}

window.addEventListener("load", function() { 
  document.querySelector('form#user-input').addEventListener("submit", handleFormSubmission);
});
