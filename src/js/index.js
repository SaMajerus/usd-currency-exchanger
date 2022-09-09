import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {getConvRate} from './exchange.js'; 

/*     UI Logic     */ 
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
