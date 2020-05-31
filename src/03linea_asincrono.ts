// lectura de un fichero asincrona linea a linea

import * as fs from 'fs';
import * as readline from 'readline';

const NOMBRE_ARCHIVO = 'oscars.csv';

let rl = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO)
});

let line_no = 0;

// el evento "line" es lanzado por cada linea del fichero. 
rl.on('line', function(line) {
    line_no++;
    let campos = line.split(',');
    if (parseInt(campos[0])==2017 && campos[2]=='True') {
        console.log(line_no,':', line);
    }
});

// evento de final de fichero
rl.on('close', function() {
    console.log('Total lines : ' + line_no);
});

console.log('xxxxxx');