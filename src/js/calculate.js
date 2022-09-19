/*     Business Logic     */ 
export default function calcConv(apiResponse, amt, tgt){
  console.log("Object 'apiResponse' in 'calculate.js' is:  " + apiResponse);
  let conversionR8 = apiResponse.conversion_rate;
  let amtInput = parseFloat(amt); 
  let convertedAmt = amtInput * conversionR8; 
  return `The conversion rate from USD to ${tgt} is ${conversionR8}. 
  Thus: $${amtInput} USD =   ${convertedAmt} ${tgt}.`; 
} 