import * as fs from 'fs';

const NOMBRE_ARCHIVO = 'oscars.csv';

let buffer = Buffer.alloc(15);

let fd = fs.openSync(NOMBRE_ARCHIVO, 'r');
try {
  console.log('fichero abierto');
  let lenBytes = fs.readSync(fd, buffer, 0, buffer.length, 10); // lee desde el byte 10 dentro del fichero pero sin cambiar la posición para futuras lecturas
  let texto = buffer.toString('utf8', 0, lenBytes);
  console.log(lenBytes, ':', texto);

  for (let i = 0; i < 3; i++) {
    lenBytes = fs.readSync(fd, buffer, 0, buffer.length, null);
    texto = buffer.toString('utf8', 0, lenBytes);
    console.log(lenBytes, ':', texto);
  }
} finally {
  fs.closeSync(fd);
  console.log('fichero cerrado');
}
console.log('xxxxxx');

//En utf8 hay caracteres que se codifican con más de un byte.Por ejemplo la ñ
//¿Qué ocurriría si en elfichero leemos 4 bytes?
/*
buffer = Buffer.from('abcñ', 'utf8');
console.log(buffer.length);
let texto = buffer.toString('utf8', 0, 4);
console.log(texto);
*/
