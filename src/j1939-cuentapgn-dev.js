//socket

const socket = io()

  
  //REFERENCIAMOS LOS ELEMENTOS
  let panel = document.getElementById('panel')
  let btn_activar = document.getElementById('btn-activar')
  let btn_desactivar = document.getElementById('btn-desactivar')
  let textarea = document.getElementById('textarea')
  let entrada = document.getElementById('entrada')

  btn_activar.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log("click")
    console.log(entrada.value)

    let senal = "i"+entrada.value+"t"+"z"
    //AL HACER CLICK -> EMITIMOS la  SOCKET el codigo para leer datos rpm
    console.log("emitimos: " + senal)
      socket.emit('message', senal)
  })
 let cnt =0
 let cnt1=0
 let cnt2=0
 let cnt3=0
 let cnt4=0
  //IMPRIMIR EN TEXTAREA
  socket.on('lectura',(data)=>{
    console.log(data)
    cnt++
    //textarea.value += cnt+": "+ data.PGN+" "+data.DA+" "+data.SA+" "+data.p+ " Data:"+data.Data+"\n"

    if(data.PGN == "F004"){cnt1++}
    if(data.PGN == "F003"){cnt2++}
    if(data.PGN == "FEFC"){cnt3++}
    if(data.PGN == "FEF2"){cnt4++}
    textarea.value = "Paquetes:     "+ "F004: "+ cnt1 + "    F003: "+cnt2+"    FEFC: "+cnt3+"    FEF2: "+cnt4+"\n"



    //panel.innerHTML=data.valor
  })

  //BORRAR  CONTENIDO DE TEXTAREA

  btn_desactivar.addEventListener('click', (event)=>{
    event.preventDefault()
    textarea.value = ""
  })



 