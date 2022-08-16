/**
 * Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */

const listaCompra = [
  "Jamon",
  "Queso",
  "Harina",
  "Arroz",
  "Cereal",
  "Leche",
  "Azucar",
];

listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

const peliculasFavoritas = [
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    fecha: new Date("2010, 08, 13"),
  },
  {
    titulo: "The Ramen Girl",
    director: "Robert Allan Ackerman",
    fecha: new Date("2009, 01, 17"),
  },
  {
    titulo: "About Time",
    director: "Richard Curtis",
    fecha: new Date("2013, 08, 8"),
  },
];
console.log(peliculasFavoritas);

const peliculasRecientes = peliculasFavoritas.filter(
  (pelicula) => pelicula.fecha > new Date("2010, 01, 01")
);
console.log(peliculasRecientes);

const directores = peliculasFavoritas.map((pelicula) => pelicula.director);
console.log(directores);

const titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);
console.log(titulos);

const directoresTitulo = directores.concat(titulos);
console.log(directoresTitulo);

const directoresTituloPropagacion = [...directores, ...titulos];
console.log(directoresTituloPropagacion);
