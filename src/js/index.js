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
  const amtInput = parseFloat(document.querySelector('input#usd-amt-input').value);  //The value entered by the user (presumably a numerical amount in USD). 
  const convertTo = document.querySelector('select#tgt-for-conv').value; 
  let convRate; //Stores the retval from 'getConvRate'. 
  let convertedAmtRetval;  //Stores retval from business logic function.

  console.log("Value of 'convertTo' is:  " + convertTo);
  if (!(convertTo === "0")){ 
    console.log("Data type of 'amtInput' is:  " + typeof amtInput);
    if (typeof amtInput === 'number'){
      document.querySelector('input#usd-amt-input').value = null; 
      document.querySelector('select#tgt-for-conv').value = "0";  
      console.log("This console log is being called before the static function's fn-call occurs.");
      convRate = await ConvertCurrency.getConvRate(convertTo);  
    } else {
      document.querySelector("#showResult").innerText = "Invalid input for USD value. Please try again.";  
    }
  } else {
    document.querySelector("#showResult").innerText = "Invalid choice for currency. Please try again."; 
  } 
  console.log("Value for 'convRate' is:  " + convRate);
  convertedAmtRetval = calcConv(convRate, amtInput, convertTo);  //Stores retval from business logic function. 
  document.querySelector('#showResult').innerText = convertedAmtRetval;  
}

window.addEventListener("load", function() { 
  document.querySelector('form#user-input').addEventListener("submit", handleFormSubmission);
});
