import * as fs from 'fs';

let buffer = Buffer.alloc(15);
const NOMBRE_ARCHIVO = 'oscars.csv';
console.log('Going to open an existing file');

fs.open(NOMBRE_ARCHIVO, 'r', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log('Fichero abierto');

  // Parámetros:
  //    fd fichero (descriptor de fichero)
  //    buffer memoria en donde se guardará los bytes leidos
  //    0 Posición dentro del buffer en donde comenzará a guardarse
  //    buffer.length número de bytes a leer
  //    null comenzar a leer desde la posición actual (inicio). Si se indica un entero
  //        comenzará a leer desde dicha posición
  fs.read(fd, buffer, 0, buffer.length, null, function (err, lenBytes) {
    if (err) {
      console.log(err);
    }
   
    console.log(lenBytes + ' bytes leidos');

    console.log(buffer.toString('utf8', 0, lenBytes));

    fs.read(fd, buffer, 0, buffer.length, null, function (err, lenBytes) {
      if (err) {
        console.log(err);
      }

      console.log(lenBytes + ' bytes leidos');

      console.log(buffer.toString('utf8', 0, lenBytes));

      // cerrar fichero
      fs.close(fd, function (err) {
        if (err) {
          console.log(err);
        }
        console.log('fichero cerrado');
      });
    });
  });
});

console.log('xxxxxx');
