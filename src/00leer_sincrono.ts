
// lee todo el fichero de forma asincrona

import * as fs from 'fs';

const NOMBRE_ARCHIVO = 'oscars.csv';

console.log("hollaa");
// le fichero de forma sincrona
try {
  let datos = fs.readFileSync(NOMBRE_ARCHIVO, 'utf8');
  console.log('el contenido es: ', datos);
} catch(error) {
  console.log('mi error', error)
}

console.log("xxxxxx");


