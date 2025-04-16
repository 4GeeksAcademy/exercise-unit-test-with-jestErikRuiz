let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

const fromEuroToDollar = (euro) => euro * oneEuroIs.USD;

const fromDollarToYen = (dollar) => {
    const euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
};

const fromYenToPound = (yen) => {
    const euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
};


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };