/**
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amigos

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

const datos = {
  nombre: "Jean Carlos",
  apellido: "Trejo Villamizar",
  edad: 26,
  altura: 171,
  eresDesarrollador: false,
};

const edad = datos.edad;
console.log(edad);

const nuevosDatos = [
  { ...datos },
  {
    nombre: "Cristian",
    apellido: "Mora",
    edad: 27,
    altura: 172,
    eresDesarrollador: false,
  },
  {
    nombre: "Yudilka",
    apellido: "Trejo",
    edad: 34,
    altura: 164,
    eresDesarrolador: false,
  },
];
console.log(nuevosDatos);

const edadOrdenada = [nuevosDatos.sort((a, b) => b.edad - a.edad)];
console.log(edadOrdenada);
