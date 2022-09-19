import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import ConvertCurrency from './exchange.js'; 
import calcConv from './calculate.js'; 

/*     UI Logic     */ 
async function handleFormSubmission(event) {
  event.preventDefault(); 
  document.querySelector('#showResult').innerText = null;  //Clears the response section (in case anything is there from a previous event.)
  
  //Storage vars for input values
  const amtInput = parseFloat(document.querySelector('input#usd-amt-input').value);  //The value entered by the user (presumably a numerical amount in USD).   **Note:  we do parseFloat because even though the Input-field's type is 'number',  it stores that value as a String rather than a Number.   (All the 'type' attribute does is restrict the user to entering values of a specified type.) 
  const convertTo = document.querySelector('select#tgt-for-conv').value; 
  let convRate; //Stores the retval from 'getConvRate'. 
  let convertedAmtRetval;  //Stores retval from business logic function.

  if (!(convertTo === "0")) { 
    if (typeof amtInput === 'number') {
      document.querySelector('input#usd-amt-input').value = null; 
      document.querySelector('select#tgt-for-conv').value = "0";  
      convRate = await ConvertCurrency.getConvRate(convertTo);  
    } else {
      document.querySelector("#showResult").innerText = "Invalid input for USD value. Please try again.";  
    }
  } else {
    document.querySelector("#showResult").innerText = "Invalid choice for currency. Please try again."; 
  } 
  convertedAmtRetval = calcConv(convRate, amtInput, convertTo);  //Stores retval from business logic function. 
  document.querySelector('#showResult').innerText = convertedAmtRetval;  
}

window.addEventListener("load", function() { 
  document.querySelector('form#user-input').addEventListener("submit", handleFormSubmission);
});
