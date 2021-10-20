//socket

const socket = io()

  
  //REFERENCIAMOS LOS ELEMENTOS
  let btn_activar     = document.getElementById('btn-activar')
  let btn_desactivar  = document.getElementById('btn-desactivar')
  let tabla           = document.getElementById('tablabody')
  
  
  
  btn_activar.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log("click")
    
    let senal = "i" + "FF"+"t"+"z"
    //AL HACER CLICK -> EMITIMOS la  SOCKET el codigo para leer datos rpm
    console.log("emitimos: " + senal)
      socket.emit('message', senal)
  })
 let cnt =0
 

//CONFIGURACION DE CHART
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ["Serial"],
      datasets: [{
          label: "Datos de velocidad J1939",
          backgroundColor: 'rgb(0, 123, 255)',
          //#000000
          borderColor: 'rgb(41, 128, 185)',
          data: [],
      }]
  },

  // Configuration options go here
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
});

//FIN DE CONFIGURACION DE CHART

// DATOS DEL PUERTO SERIAL
let counter=0
  socket.on('lectura',(data)=>{
    console.log(data)
    cnt++

    chart.data.labels.push(counter);
        chart.data.datasets.forEach(dataset => {

          conversionDecimal = parseInt(data.valor, 16);
          dataset.data.push(conversionDecimal);
        });
        counter++;
        chart.update();
 

  
    
  })
// FIN DE LECTURA DEL PUERTO SERIAL


  //BORRAR  CONTENIDO DE TEXTAREA
  btn_desactivar.addEventListener('click', (event)=>{
    event.preventDefault()
    textarea.value = ""
  })



 