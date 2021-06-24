//SOCKET 
const socket = io()

//LISTA DE PIDS
let listapid = [
   "01 Monitor status since DTCs cleared",
   "02 Freeze DTC",
   "03 Fuel system status",
   "04 Calculated engine load",
   "05 Engine coolant temperature",
   "06 Short term fuel trim — Bank 1",
   "07 Long term fuel trim — Bank 1",
   "08 Short term fuel trim — Bank 2",
   "09 Long term fuel trim — Bank 2",
   "0a Fuel pressure",
   "0b Intake manifold absolute pressure",
   "0c Engine RPM",
   "0d Vehicle speed",
   "0e Timing advance",
   "0f Intake air temperature",
   "10 MAF air flow rate",
   "11 Throttle position",
   "12 Commanded secondary air status",
   "13 Oxygen sensors present (in 2 banks)",
   "14 Oxygen Sensor 1 - Short term fuel trim",
   "15 Oxygen Sensor 2 - Short term fuel trim",
   "16 Oxygen Sensor 3 - Short term fuel trim",
   "17 Oxygen Sensor 4 - Short term fuel trim",
   "18 Oxygen Sensor 5 - Short term fuel trim",
   "19 Oxygen Sensor 6 - Short term fuel trim",
   "1a Oxygen Sensor 7 - Short term fuel trim",
   "1b Oxygen Sensor 8 - Short term fuel trim",
   "1c OBD standards this vehicle conforms to",
   "1d Oxygen sensors present (in 4 banks)",
   "1e Auxiliary input status",
   "1f Run time since engine start",
   "20 PIDs supported [21 - 40]"
  ]//FIN DE LA LISTA PID

   let listapid2 = [
   "21 Distance traveled with malfunction indicator lamp (MIL) on",
   "22 Fuel Rail Pressure (relative to manifold vacuum)",
   "23 Fuel Rail Gauge Pressure (diesel, or gasoline direct injection)",
   "24 Oxygen Sensor 1 - Fuel–Air Equivalence Ratio",
   "25 Oxygen Sensor 2 - Fuel–Air Equivalence Ratio",
   "26 Oxygen Sensor 3 - Fuel–Air Equivalence Ratio",
   "27 Oxygen Sensor 4 - Fuel–Air Equivalence Ratio",
   "28 Oxygen Sensor 5 - Fuel–Air Equivalence Ratio",
   "29 Oxygen Sensor 6 - Fuel–Air Equivalence Ratio",
   "2a Oxygen Sensor 7 - Fuel–Air Equivalence Ratio",
   "2b Oxygen Sensor 8 - Fuel–Air Equivalence Ratio",
   "2c Commanded EGR",
   "2d EGR Error",
   "2e Commanded evaporative purge",
   "2f Fuel Tank Level Input",
   "30 Warm-ups since codes cleared",
   "31 Distance traveled since codes cleared",
   "32 Evap. System Vapor Pressure",
   "33 Absolute Barometric Pressure",
   "34 Oxygen Sensor 1 - Fuel–Air Equivalence Ratio",
   "35 Oxygen Sensor 2 - Fuel–Air Equivalence Ratio",
   "36 Oxygen Sensor 3 - Fuel–Air Equivalence Ratio",
   "37 Oxygen Sensor 4 - Fuel–Air Equivalence Ratio",
   "38 Oxygen Sensor 5 - Fuel–Air Equivalence Ratio",
   "39 Oxygen Sensor 6 - Fuel–Air Equivalence Ratio",
   "3a Oxygen Sensor 7 - Fuel–Air Equivalence Ratio",
   "3b Oxygen Sensor 8 - Fuel–Air Equivalence Ratio",
   "3c Catalyst Temperature: Bank 1, Sensor 1",
   "3d Catalyst Temperature: Bank 2, Sensor 1",
   "3e Catalyst Temperature: Bank 1, Sensor 2",
   "3f Catalyst Temperature: Bank 2, Sensor 2",
   "40 PIDs supported [41 - 60]"
  ]//FIN DE LA LISTA PID2

  let listapid3 = [
   "41 Monitor status this drive cycle",
   "42 Control module voltage",
   "43 Absolute load value",
   "44 Fuel–Air commanded equivalence ratio",
   "45 Relative throttle position",
   "46 Ambient air temperature",
   "47 Absolute throttle position B",
   "48 Absolute throttle position C",
   "49 Absolute throttle position D",
   "4a Absolute throttle position E",
   "4b Absolute throttle position F",
   "4c Commanded throttle actuator",
   "4d Time run with MIL on",
   "4e Time since trouble codes cleared",
   "4f Maximum value for Fuel–Air equivalence ratio, oxygen sensor voltage, oxygen sensor current, and intake manifold absolute pressure",
   "50 Maximum value for air flow rate from mass air flow sensor",
   "51 Fuel Type",
   "52 Ethanol fuel percentage",
   "53 Absolute Evap system Vapor Pressure",
   "54 Evap system vapor pressure",
   "55 Short term secondary oxygen sensor trim",
   "56 Long term secondary oxygen sensor trim",
   "57 Short term secondary oxygen sensor trim",
   "58 Long term secondary oxygen sensor trim",
   "59 Fuel rail absolute pressure",
   "5a Relative accelerator pedal position",
   "5b Hybrid battery pack remaining life",
   "5c Engine oil temperature",
   "5d Fuel injection timing",
   "5e Engine fuel rate",
   "5f Emission requirements to which vehicle is designed",
   "60 PIDs supported [61 - 80]"
   ] //FIN DE LA LISTA PID3
  
  
  //REFERENCIAMOS LOS ELEMENTOS
  
  let btn_activar = document.getElementById('btn-activar')
  let btn_consultar = document.getElementById('btn-consultar')
  let btn_limpiar = document.getElementById('btn-limpiar')
   
//########## CAPTURAMOS EVENTO DE ACTIVARCIÓN
  btn_activar.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log("click")
    let senal = "i00tz"//00 soporte OBDII
    socket.emit('message', senal) 
  })

//########## VARIABLES PARA EL CONTEXTO GLOBAL
  let cnt = 0;
  let lista_trama;
  let binario =""

//########## ESCUCHAMOS LOS DATOS 
  socket.on('lectura',(data)=>{
    lista_trama=[data.A, data.B, data.C, data.D] 
  })

//########## CAPTURAMOS EVENTO DE CONSULTA PIDs
  btn_consultar.addEventListener('click', (event)=>{
    event.preventDefault()
    
    lista_trama.forEach(element => {

      bin = parseInt(element,16).toString(2)

      //medio<<< 
      //rellenamos los ceros que omite el conversor hexadecimal
      let  vec_bin= bin.split('')
      let  tamano = vec_bin.length
      if(tamano<8){
        for (let contador=0;contador<8-tamano ; contador++){
            vec_bin.unshift("0")
        }
      }
      auxiliar = vec_bin.join('')
      //medio>>>
      
      binario +=auxiliar//acumulamos las cadenas 1010101...
    });//FOR-EACH
   
//########## IMPRIMIMOS EN PANTALLA LA LISTA DE PIDs
    while (cnt<binario.length){
       console.log(binario)
       if (binario[cnt]=="1"){
          
           let ul = document.querySelector('#lista')
           let li = document.createElement('li')
           li.innerHTML=`${listapid[cnt]}`
           li.className="list-group-item remover"
           ul.appendChild(li)
       }/**end if */
   
       cnt++ //recorrido
    }/**end while */
    cnt=0 //re-iniciar contador
    binario ="" //re-cadena
  })


//########## LIMPIAMOS LA LISTA DE PIDS EN PANTALLA
 btn_limpiar.addEventListener('click',(event)=>{

  event.preventDefault()
  let ul = document.querySelector('#lista')
  let cantidad = ul.children.length //guardamos la cantidad de hijos actuales. 
  //eliminacion de todos los hijos de ul
  for (let x=0; x<cantidad-1;x++){
    let li = document.querySelector('.remover')//capturamos un li por vez
    ul.removeChild(li)                         //eliminamos dicho li
  }
  
 })/**end btn_limpiar */