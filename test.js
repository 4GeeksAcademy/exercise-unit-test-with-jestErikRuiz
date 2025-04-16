const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test('Convertir 3.5 euros a dólares', () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});

test('Convertir 1 dólar a yenes', () => {
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});

test('Convertir 156.5 yenes a libras', () => {
    const expected = (156.5 / 156.5) * 0.87;
    expect(fromYenToPound(156.5)).toBeCloseTo(expected);
});