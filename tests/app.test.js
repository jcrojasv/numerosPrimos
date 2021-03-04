const app = require('../app');

const nonAcceptedValues = ['abc', null, undefined, NaN, '', false, 0, 1, -5];

describe('numberIsValid', () => {
  it('Debe retornar verdadero si el valor es igual o mayor que 2', () => {
    const result = app.numberIsValid(2);
    expect(result).toBe(true);
  });

  it('Retornar falso en caso de no ser numerico', () => {
    // Parametros a probar ['abc', null, undefined, NaN, '', false, 0, 1]
    nonAcceptedValues.forEach( arg => {
      let result = app.numberIsValid(arg);
      expect(result).toBeFalsy();
    });
  });
});


describe('setArrayElements', () => {
  it('Debe retornar un arreglo de tamaño "n+1"', () => {
    const numberOfElements = 5;
    const result = app.setArrayElements(numberOfElements);

    expect(result.length).toBe(numberOfElements + 1);
  });
});

describe('getPrimes', () => {
  it('Retornar una excepcion si el valor no es numérico o menor que dos', () => {
    // Parametros a probar ['abc', null, undefined, NaN, '', false, 0, 1]
    nonAcceptedValues.forEach( arg => {
      expect(() => { app.getPrimes(arg) }).toThrow();
    });
  });

  it('Retornar un array con por lo menos un valor', () => {
    const result = app.getPrimes(5);
    expect(result.length).toBeGreaterThan(0);
  });
});
