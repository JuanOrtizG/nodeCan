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
 let cnt1=0
 let cnt2=0
 let cnt3=0
 let cnt4=0
  //IMPRIMIR EN TEXTAREA
  socket.on('lectura',(data)=>{
    console.log(data)
    cnt++
    //textarea.value += cnt+": "+ data.PGN+" "+data.DA+" "+data.SA+" "+data.p+ " Data:"+data.Data+"\n"

  
    tabla.innerHTML +=
    `<tr>
        <th scope="row">${cnt}</th>
        <td>${data.PGN}</td>
        <td>60000</td>
        <td>${data.DA}</td>
        <td>${data.SA}</td>
        <td>${data.Data[0]}</td>
        <td>${data.Data[1]}</td>
        <td>${data.Data[2]}</td>
        <td>${data.Data[3]}</td>
        <td>${data.Data[4]}</td>
        <td>${data.Data[5]}</td>
        <td>${data.Data[6]}</td>
        <td>${data.Data[7]}</td>
      </tr>`

    



    //panel.innerHTML=data.valor
  })

  //BORRAR  CONTENIDO DE TEXTAREA

  btn_desactivar.addEventListener('click', (event)=>{
    event.preventDefault()
    textarea.value = ""
  })



 