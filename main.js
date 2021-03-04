const app = require('./app.js');

var args = process.argv.slice(2);
const num = parseInt(args[0]);
const orderDesc = false;

try {
  console.log(`Numeros primos hasta ${num}`, app.getPrimes(num, orderDesc));
} catch (error) {
  console.log(error);
}