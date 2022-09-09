import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './exchange.js'; 

// UI Logic
function printError(request, apiResponse, tgt) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the conversion rate for ${tgt}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function printElements(apiResponse, tgt) { 
  let convertedAmt; 
  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${apiResponse.main.humidity}%.
  The temperature in Fahrenheit is ${(1.8 * (apiResponse.main.temp-273))+32} degrees.
  The temperature in Kelvin is ${apiResponse.main.temp} degrees.
  The timezone is ${apiResponse.timezone}.
  The tempurature feels like ${apiResponse.main.feels_like} degrees Kelvin.
  Sunrise will occur at ${apiResponse.sys.sunrise} UTC.
  Sunset will occur at ${apiResponse.sys.sunset} UTC.`;  
}

function handleFormSubmission(event) {
  event.preventDefault(); 
  const amtInput = document.querySelector('input#usd-amt-input').value; 
  const convertTo = document.querySelector('select#tgt-for-conv').value; 
  document.querySelector('input#usd-amt-input').value = null; 
  document.querySelector('select#tgt-for-conv').value = "0"; 
  document.querySelector('div#input-amt-storage').innerHTML = amtInput; //Stores the USD-amount input by user, to access later. 
  getConvRate(convertTo); 
}

window.addEventListener("load", function() {
  document.querySelector('form#user-input').addEventListener("submit", handleFormSubmission);
});
