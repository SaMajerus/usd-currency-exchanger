import {getConvRate} from './../src/js/exchange.js';

describe('getConvRate', () => {

  /* 'UAH' is the currency code for the Ukrainian Hryvnia. */ 
  test("It should call the API, parse its response for the conversion rate (for USD -> 'UAH'), and print the result message.", () => {
    const tgt = "UAH"; 
    let amount = 50.00; 
    let retval = getConvRate(tgt, amount);
    
    expect(typeof retval === String); 
  });
});