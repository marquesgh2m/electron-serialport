const serialport = require('serialport')
//let x=0
const Readline = require('@serialport/parser-readline')
const port = new serialport('/dev/ttyUSB0', {baudRate:9600})
const parser = new Readline()

var temperaturaInt = 0;
var umidadeInt = 0;
var temperaturaStr = 0;
var umidadeStr = 0;

port.pipe(parser)
parser.on('data', (line)=>
{
	console.log("Recebe: " + (line));
	var leituraDHT11 = line.split('|');
	temperaturaInt = leituraDHT11[0];
	umidadeInt = leituraDHT11[1];
	temperaturaStr += String(temperaturaInt)+'\n';
	umidadeStr += String(umidadeInt)+'\n';
	console.log("Temp:" + temperaturaStr);
	console.log("Umid:" + umidadeStr);
})

