/**
 * Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal
 */

const nombre = "Jean Carlos"; 
const apellido = "Trejo";
const nombreApellido = `${nombre} ${apellido} Villamizar`;

console.log(nombreApellido);
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