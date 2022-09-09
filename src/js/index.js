import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {getConvRate} from './exchange.js'; 

/*     UI Logic     */ 
function handleFormSubmission(event) {
  event.preventDefault(); 
  document.querySelector('#showResult').innerText = null;  //Clears the response section (in case anything is there from a previous event.)
  const amtInput = document.querySelector('input#usd-amt-input').value; 
  const convertTo = document.querySelector('select#tgt-for-conv').value; 
  document.querySelector('input#usd-amt-input').value = null; 
  document.querySelector('select#tgt-for-conv').value = "0";  
  getConvRate(convertTo, amtInput); 
}

window.addEventListener("load", function() { 
  document.querySelector('form#user-input').addEventListener("submit", handleFormSubmission);
});
