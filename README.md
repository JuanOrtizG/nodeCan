# nodeCan
Proyecto para bus CAN
Proceso de Instalación más simple
1. Debemos tener instalado NODE JS en nuestro sistema operativo: https://nodejs.org/es/
2. Se debe descargar la librería AdminLTE para tenerla preparada : https://adminlte.io/    https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.1.0
    la versión utilizada es la 3.1.0
3. Descargamos el archivo principal .ZIP de https://github.com/JuanOrtizG/nodeCan, lo descomprimimos, cambiamos el nombre a "nodeCAN". 
4. la carpeta "nodeCAN" lleva los siguientes ficheros:
    nodeCAN
     |
     |__src
     |__index.js
     |__package.json
    
5. Descomprimimos el archivo AdminLTE-3.1.0.ZIP y copiamos las carpetas "plugins" y "dist" a la carpeta de trabajo "src" que se encuentra en "nodeCAN" quedando de la siguiente forma
   nodeCAN
     |
     |__src
     |     |
     |     |__plugins
     |     |__dist
     |     |__css
     |     |__img
     |   
     |
     |__index.js
     |__package.json

6. Mediante la consola ingresamos a la ubicación de la carpeta "nodeCAN", dentro de ella ejecutamos:
      >> npm install
   este comando instalará los módulos necesarios para el proyecto, que se encuentran en el archivo package.json.
7. si la opción 6 tiene problemas, podemos instalar cada módulo por separado: 
    >> npm install express@4.17.1
    >> npm install mysql@2.18.1
    >> npm install serialport@9.2.0
    >> npm install socket.io@4.1.2
    
 8. Accedemos a la carpeta "nodeCAN" desde la consola de comandos y ejecutamos: 
    >> node index.js
 9. Abrimos nuestro navegador firefox y escribimos en la dirección: 
    localhost:3000
 
 
 NOTAS: si al ejecutar el archivo index.js da un aviso de problemas con el puerto, se puede acceder al archivo index.js y modificar el código: 
      const port = new SerialPort( 'COM4', {baudRate: 9600} )
      aquí podemos cambiar el puerto serial: COM1, COM2, COM3 etc. 
    
    
    
    
