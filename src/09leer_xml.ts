import http from 'http';

//https://www.npmjs.com/package/xml2jsn
//npm install xml2js @types/xml2js
import xml from 'xml2js';


const url = 'http://www.aemet.es/xml/playas/play_v2_3501601.xml';

http.get(url, (res: any) => {
    const buffer: string[] = [];

    // almacena en el buffer cada parte del fichero recibido
    res.on('data', function (chunk: any) {
        buffer.push(chunk);
    });

    // se alccanza el final
    res.on('end', function () {
        console.log("finalizado");
   
        let text: string = buffer.join('');
   
        xml.parseString(text, function (error: Error, result: any) {
          if (error) {
            console.log(error);
          } else {
            res = result;
            console.dir(result, { depth: null });
          }
        });

    });
});

console.log("xxxxxx");