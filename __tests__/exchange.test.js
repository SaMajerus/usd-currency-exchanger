import {printElements} from './../src/js/exchange.js';

describe('printElements', () => {

  test("it should parse the API's response, and save the conversion rate (for USD -> 'UAH'). ['UAH' = currency code for Ukrainian Hryvnia']", () => {
    /* The content of 'response' is based on the 'Pair-Endpoint' example response from the API documentation (see link):  https://www.exchangerate-api.com/docs/pair-conversion-requests */ 
    let response = { 
      "base_code": "USD",
      "target_code": "UAH",
      "conversion_rate": 37.1618
    };
    let retval = printElements(response);
    expect(retval).toEqual(response.conversion_rate); 
  });
});