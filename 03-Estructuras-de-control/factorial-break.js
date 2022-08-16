/**
 * Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una        sentencia break
 */
let numero = 10;
let factorial = 1;
let copiaNumero = numero;

while (true) {
  if (copiaNumero === 1 || copiaNumero === 0) {
    break;
  }
  factorial *= copiaNumero;
  copiaNumero--;
}

console.log(`El factorial de ${numero} es: ${factorial}`);
