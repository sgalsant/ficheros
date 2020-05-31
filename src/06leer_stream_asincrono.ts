import * as fs from 'fs';
const NOMBRE_ARCHIVO = 'oscars.csv';

let readStream = fs.createReadStream(NOMBRE_ARCHIVO, {
  encoding: 'utf8',
  highWaterMark: 100
});

let cont = 0;

// ¿Qué ocurre con el stream si se finaliza el programa antes de ser cerrado?
/*
process.on('exit', function () {
  console.log("stream destruido?", readStream.destroyed);
  readStream.close();
  console.log("stream destruido?", readStream.destroyed);
});
*/

// cuando llega al final del fichero se cierra
readStream.on('close', function () {
  console.log('cerrado');
});

readStream.on('end', function () {
  console.log('se ha llegado al final del fichero');
});

// cuando se añade el evento "data" automaticamente empieza a leer
readStream.on('data', function (chunk) {
  console.log(++cont, '  ======');
  console.log(chunk.toString());
  // ¿Se cierra el stream si se finaliza el proceso?
  // process.exit()
});

console.log('xxxxxx');
