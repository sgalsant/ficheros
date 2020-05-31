/*
Crear una aplicación de consola (nodejs) que ofrezca la siguiente funcionalidad:
1) Dado un año, mostrar todas las categorías sin incluir duplicados
2) Dado un año, mostrar todos los premiados
3) Dada una categoría, generar un fichero con el mismo nombre de la categoría
 añadiendo extensión “csv”, incluyendo en dicho fichero todos los premiados 
 con año y premiado (entity)
 4) Leer de un fichero una lista de categorías (una por línea) y mostrar en la consola
  las entradas que pertenecen a estas categorias
*/

import * as fs from 'fs';
import * as readline from 'readline';

//https://www.codecademy.com/articles/getting-user-input-in-node-js
// npm install prompt-sync @types/prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({ sigint: true });

async function main() {
  while (true) {
    console.log('1.- Categorias');
    console.log('2.- insertar');
    console.log('0.- salir');
    let opcion = prompt('opcion? ');
    switch (opcion) {
      case '0':
        return;
        break;
      case '1':
        await mostrarCategorias();
        break;
      case '2':
        insertar();
        break;
    }
  }
}

async function mostrarCategorias() {
  let anyo = prompt('año? ');
  const rl = readline.createInterface({
    input: fs.createReadStream('oscars.csv', { encoding: 'utf8' })
  });

  for await (const line of rl) {
    let campos = line.split(',');
    if (campos[0] == anyo) {
      console.log(campos[1]);
    }
  }
}

function insertar() {
  try {
    fs.unlinkSync('salida.csv'); // se elimina el archivo
  } catch {

  }

  for (let i = 0; i< 3; i++) {
    let nombre = prompt('insertar nombre? ');
    fs.appendFileSync('salida.csv', nombre +'\n');
  }
}


main();
