import * as http from 'http';

const URL = 'http://www.aemet.es/xml/playas/play_v2_3501601.xml';

http.get(URL, res => {
    // muestra los caracteres recibidos
    res.on('data', function (chunk) {
        console.log(chunk.toString());
    });

    // se alcanza el final
    res.on('end', function () {
        console.log("finalizado");
    });
});

console.log("xxxxxx");