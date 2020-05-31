import * as fs from 'fs';
const NOMBRE_ARCHIVO = 'oscars.csv';


async function read() {
  let readStream = fs.createReadStream(NOMBRE_ARCHIVO, { encoding: 'utf8', highWaterMark: 100 });
  try {
    let cont = 0;
    for await (const chunk of readStream) {
      console.log(++cont, '  ======');
      console.log(chunk.toString());
    }
  }
  finally {
    readStream.close();
  }
}

async function main() {
  await read();
  console.log("final de lectura de fichero");
}

main();
console.log('xxxxxx');

