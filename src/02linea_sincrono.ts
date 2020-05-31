import * as fs from 'fs';
import * as readline from 'readline';

const NOMBRE_ARCHIVO = 'oscars.csv';

async function processLineByLine() {
  const rl = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO, { encoding: 'utf8'})
  });

  let line_no = 0;
  for await (const line of rl) {
    line_no++;
    let campos = line.split(',');
    if (parseInt(campos[0]) == 2017 && campos[2] == 'True') {
      console.log(line_no, ':', line);
    }
  }

  console.log('Total lines : ' + line_no);
}

async function main() {
    await processLineByLine();
    console.log("final de procesar linea");
}

main();
console.log('xxxxxx');