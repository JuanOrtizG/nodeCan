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
    staticZones: [
      {strokeStyle: "#F03E3E", min: 0, max: 0}, // Red from 100 to 130
      {strokeStyle: "#30b300", min: 0, max: 60}, // Yellow
      {strokeStyle: "#30B32D", min: 60, max: 100}, // Green
      {strokeStyle: "#FFDD00", min: 100, max: 180}, // Yellow
      {strokeStyle: "#F03E3E", min: 180, max: 255}  // Red
   ],
   staticLabels: {
    font: "20px sans-serif",  // Specifies font
    labels: [0, 60, 80, 140, 200, 255],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  renderTicks: {
    divisions: 6,
    divWidth: 1.1,
    divLength: 0.7,
    divColor: '#333333',
    subDivisions: 3,
    subLength: 0.5,
    subWidth: 0.6,
    subColor: '#666666'
  },
    
  };
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 255; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 38; // set animation speed (32 is default value)
  
  
  
  //REFERENCIAMOS LOS ELEMENTOS
  let panel = document.getElementById('panel')
  let btn_activar = document.getElementById('btn-activar')
  let btn_desactivar = document.getElementById('btn-desactivar')

  btn_activar.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log("click")
    let senal = "i0dty"
    //AL HACER CLICK -> EMITIMOS la  SOCKET el codigo para leer datos rpm
    console.log("emitimos: " + senal)
      socket.emit('message', senal)
  })
  
  socket.on('lectura',(data)=>{
    console.log(data)
    conversionDecimal = parseInt(data.valor, 16);
    gauge.set(conversionDecimal)
    panel.innerHTML=conversionDecimal
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
