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
    let valueInEuro = valueInDollar/oneEuroIs.USD
    let valueInYen = valueInEuro * oneEuroIs.JPY
    return valueInYen
    
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen/ oneEuroIs.JPY
    let valueInPound = valueInEuro * oneEuroIs.GBP
    return valueInPound
    
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }