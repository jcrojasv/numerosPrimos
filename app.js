function numberIsValid(num) {
  return typeof num === 'number' && Number.isInteger(num) && num >= 2;
}

function setArrayElements(numberOfElements) {
  return new Array(numberOfElements+1).fill(true);
}

function getPrimes(num) {

  if (!numberIsValid(num)) {
    throw 'El valor debe ser un número entero mayor o igual a 2.';
  }

  const elements = setArrayElements(num);
  const primesElements = [];

  for (let i = 2; i <= num; ++i) {
    if (elements[i]) {
      primesElements.push(i);

      for (let j = 1; j * i <= num; ++j) {
        elements[i * j] = false;
      }
    }
  }

  return primesElements;
};

module.exports = {
  numberIsValid,
  setArrayElements,
  getPrimes,
}