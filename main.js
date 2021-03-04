const app = require('./app.js');

const num = 7;
const orderDesc = true;

try {
  console.log(`Numeros primos hasta ${num}`, app.getPrimes(num, orderDesc));
} catch (error) {
  console.log(error);
}