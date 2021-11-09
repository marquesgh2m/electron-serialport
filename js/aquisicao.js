const fs = require('fs');
let x=0;
var historyTemp = '';
var historyUmid = '';

var intervalo = setInterval(()=>
{   
    if (controle) {
        grafico1(x++, temperaturaInt);
        grafico2(x++, umidadeInt);
        historyTemp += String(temperaturaInt)+'\n';
        historyUmid += String(umidadeInt)+'\n';
        console.log("Temp:" + temperaturaInt);
        console.log("Umid:" + umidadeInt);
        //fs.appendFileSync('log_temperatura.txt', String(temperaturaInt)+'\n');
        //fs.appendFileSync('log_umidade.txt', String(umidadeInt)+'\n');
    }
}
, 1000);