//socket

const socket = io()


//configuración del gauge
var opts = {
    angle: -0.2, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    percentColors : [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
    
    
  };
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 15; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 38; // set animation speed (32 is default value)
  
  
  
  //REFERENCIAMOS LOS ELEMENTOS
  let panel = document.getElementById('panel')
  let btn_activar = document.getElementById('btn-activar')
  let btn_desactivar = document.getElementById('btn-desactivar')

  btn_activar.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log("click")
    let senal = "i5ety"
    //AL HACER CLICK -> EMITIMOS la  SOCKET el codigo para leer datos rpm
    console.log("emitimos: " + senal)
      socket.emit('message', senal)
  })
  
  socket.on('lectura',(data)=>{
    console.log(data)
    gauge.set(data.valor)
    panel.innerHTML=data.valor
  })


  //PROGRAMA PRINCIPAL: recibo la respuesta
  /*
 let cnt=0
  setInterval(() => {
    cnt = cnt + 0.5
    panel.innerHTML=cnt
    gauge.set(cnt); // set actual value    
  }, 3000);
*/
