/**
 * Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
 */
const nombre = "Jean Carlos";
const apellido = "Trejo";
const estudiante = nombre.concat(" ", apellido);
console.log(estudiante);

const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let cantidadLetras = estudiante.length;
console.log(cantidadLetras);

const inicialNombre = nombre.charAt(0);
console.log(inicialNombre);

const finalApellido = apellido.slice(apellido.length - 1, apellido.length);
console.log(finalApellido);

const sinEspacios = estudiante.replace(/ /g, "");
console.log(sinEspacios);

const nombreEstudiante = estudiante.includes(nombre);
console.log(nombreEstudiante);
