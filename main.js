const app = require('./app.js');

const num = 7;

try {
  console.log(`Numeros primos hasta ${num}`, app.getPrimes(num));
} catch (error) {
  console.log(error);
}