const fs = require('fs');
let x=0;
var historyTemp = '';
var historyUmid = '';

var intervalo = setInterval(()=>
{   
    if (controle) {
        grafico1(x++, temperaturaInt);
        grafico2(x++, umidadeInt);
        var timeElapsed = Date.now();
        var today = new Date(timeElapsed);

        historyTemp += today.toLocaleDateString() + ", " + 
                       today.toLocaleTimeString('en-GB') + ", " + 
                       String(temperaturaInt)+'\n';

        historyUmid += today.toLocaleDateString() + ", " + 
                       today.toLocaleTimeString('en-GB') + ", " + 
                       String(umidadeInt)+'\n';

        console.log("Temp:" + temperaturaInt);
        console.log("Umid:" + umidadeInt);
        //fs.appendFileSync('log_temperatura.txt', String(temperaturaInt)+'\n');
        //fs.appendFileSync('log_umidade.txt', String(umidadeInt)+'\n');
    }
}
, 1000);