const app = require('./app.js');

var args = process.argv.slice(2);
console.log(args)
const num = parseInt(args[0]);
const order = args[1];
const orderDesc = order === 'asc' ? false: true;

try {
  console.log(`Numeros primos hasta ${num}`, app.getPrimes(num, orderDesc));
} catch (error) {
  console.log(error);
}