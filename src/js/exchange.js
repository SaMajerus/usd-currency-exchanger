/*     'API Call Service' Logic     */ 
export default function getConvRate(target) {  //'target' currency for conversion (the 'to' in "from -> to") is passed into fn. 
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target}`; 

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, target); 
    } else { 
      printError(this, response, target); 
    }
  });

  request.open("GET", url, true);
  request.send();
}