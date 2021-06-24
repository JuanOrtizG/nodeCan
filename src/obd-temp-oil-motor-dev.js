//WEBSOCKET
let socket = io()

//REFERENCIAMOS LOS ELEMENTOS
let panel = document.getElementById('panel')
let btn_activar = document.getElementById('btn-activar')
let btn_desactivar = document.getElementById('btn-desactivar')

btn_activar.addEventListener('click', (event)=>{
  event.preventDefault()
  console.log("click")
  let senal = "i5ctw"
  //AL HACER CLICK -> EMITIMOS la  SOCKET el codigo para leer datos rpm
  console.log("emitimos: " + senal)
    socket.emit('message', senal)
})

//CONFIGURACIÓN DEL TERMOMETRO

let datos = {
  renderTo: document.getElementById('draw'),
  width: 200,
  height: 400,
  borderRadius: 20,
  borders: 0,
  barStrokeWidth: 20,
  minorTicks: 10,
  majorTicks: [-40,-17,8,33,60,80,110,130,160,180,210],
  value: 30,
  units: "°C",
  colorValueBoxShadow: false,
  animatedValue: true,
  animationRule: 'elastic',
  animationDuration: 1000,
  
}


var gauge = new LinearGauge(datos)

document.body.appendChild(gauge.options.renderTo)
document.getElementById('elemento_gauge').appendChild(gauge.options.renderTo)



socket.on('lectura',(data)=>{
  console.log(data)
  let calcular = ((100*data.valor+4000)/250)//conversión de escala termometrica.
  gauge.update({value: calcular}) //actualizamos los datos.
  panel.innerHTML=data.valor      //imprimimos en pantalla datos del pic
})

/*
let cont = 0
setInterval(() => {
  cont+=0.5
  gauge.update({        
      value: cont
   });    
   console.log(gauge.animation.duration)
   
}, gauge.animation.duration);
*/











