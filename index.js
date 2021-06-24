//importando modulos http, express y socket
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const puerto = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

//importando MODULO SERIAL
var SerialPort = require('serialport');
var Delimiter = require('@serialport/parser-delimiter');
const port = new SerialPort( 'COM4', {baudRate: 9600}  )
var parser = port.pipe(new Delimiter({ delimiter: '\r\n' }));



//static file
app.use(express.static(path.join(__dirname, 'src')));


//VARIABLES GLOBALES
let estado;
let contador =0;
let enviandojson;

//LECTURA DEL PUERTO SERIE
//enviamos constantemente datos al cliente por cada interrupción del puerto serie
parser.on('data', function(data){
    data = data.toString();       
    console.log(data)
    const dato = JSON.parse(data) 
    enviandojson=dato
    console.log(dato);
    io.sockets.emit("lectura",enviandojson)//envio de datos al cliente
  })
 

//PETICIONES GET: consulta ajax
app.get('/flot', (req, res) => {
    console.log(req.params)
    
    res.json(enviandojson)//enviamos un formato json
  })

  //SOCKET
io.on('connection',(socket)=>{
  console.log("nueva conección"+socket.id)

  socket.on('message',(data)=>{
    console.log("enviando serial: "+ data)

    port.write(data) //cuando el cliente hace click... enviamos los datos solicitados al PIC

  })//socket-message

  


})//io-connection

//ESCUCHANDO EL PUERTO 3000
server.listen(puerto, ()=> {
    console.log(`Server is up on port ${puerto}.`)
});