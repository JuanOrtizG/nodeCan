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
 let cnt = 0
  //IMPRIMIR EN TEXTAREA
  socket.on('lectura',(data)=>{
    console.log(data)
    cnt++
    decimal = parseInt(data.valor, 16);
    textarea.value += cnt+": "+ data.PGN+" "+data.DA+" "+data.SA+" "+data.p+ " Data:"+data.Data+" " +"valor: "+decimal+"\n"
    //panel.innerHTML=data.valor
  })

  //BORRAR  CONTENIDO DE TEXTAREA

  btn_desactivar.addEventListener('click', (event)=>{
    event.preventDefault()
    textarea.value = ""
  })



 