// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let x1 = valueInDollar/ oneEuroIs.USD
    console.log(x1)
    let valueInYen = valueInEuro * oneEuroIs.JPY
    return valueInYen
    
}


const fromYentoPund = function(valueInYen){
    let valueInEuro = valueInPound/oneEuroIs.JPY
    console.log(valueInEuro)
    let valueInPound = valueInEuro * oneEuroIs.GBP
    return valueInPound
    
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYentoPund }