const serialport = require('serialport')

//let x=0
const Readline = require('@serialport/parser-readline')
const port = new serialport('/dev/ttyUSB0', {baudRate:9600})
const parser = new Readline()
port.pipe(parser)
parser.on('data', (line)=>
{
	console.log("Recebe: " + (line));
	var leituraDHT11 = line.split('|');
	console.log("Temp:" + leituraDHT11[0]);
	console.log("Umid:" + leituraDHT11[1]);
	//grafico(x++, (line))
})

