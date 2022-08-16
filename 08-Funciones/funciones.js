/**
 * Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
 */

function devuelveTrue() {
  return true;
}
console.log(devuelveTrue());

async function funcionAsyn() {
  return setTimeout(() => {
    console.log("Hola soy una promesa ");
  }, 5000);
}

funcionAsyn();

function* idPares() {
  let id = 0;
  while (true) {
    id += 2;
    yield id;
  }
}
const pares = idPares();
console.log(pares.next().value);
console.log(pares.next().value);
