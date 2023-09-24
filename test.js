test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dolar should be 106.5833333 yenn", function(){
    const { fromDollarToYen } = require('./app.js')
    const yenes = fromDollarToYen(1.2)
    const expected = 1 * 127.9; 
    
     expect(fromDollarToYen(1.2)).toBe(expected); 
})
test("One yen should be 0.00625488663 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(127.9)
    const expected = 1 * 0.8; 
     expect(fromYenToPound(127.9)).toBe(expected); 
})