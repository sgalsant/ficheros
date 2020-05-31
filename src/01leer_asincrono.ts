
// lee todo el fichero de forma  asincrona

import * as fs from 'fs';

const NOMBRE_ARCHIVO = 'oscars.csv';

// lee todo fichero de forma asincrona
fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
  if (error) {
    console.error(error);
  }
  console.log('El contenido es: ', datos);
});


console.log("xxxxxx");


