# nodeCan

_Software web para la visualización de datos vehiculares con sistemas OBD II y J1939, este readme presenta el proceso de instalación en sistemas operativos windows_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Necesitamos algunas herramientas instaladas en nuestro computador para poder desplegar el sistema_

```
Debemos tener instalado NODE JS en nuestro sistema operativo: https://nodejs.org/es/
Debemos en preferencia tener instalado el navegador FIREFOX. 
```

### Instalación 🔧 

_1. Se debe descargar la librería AdminLTE para tenerla preparada : [AdminLTE](https://adminlte.io/)    [AdminLTE-3.1.0](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.1.0)
    la versión utilizada es la 3.1.0_
    
_2. Descargamos el archivo principal .ZIP del [software CAN](https://github.com/JuanOrtizG/nodeCan), lo descomprimimos, cambiamos el nombre a "nodeCAN"._

_3. la carpeta "nodeCAN" lleva los siguientes fichero_ 

_la carpeta "nodeCAN" lleva los siguientes ficheros:_

```    
    nodeCAN
     |
     |__src
     |__index.js
     |__package.json
```

_4. Descomprimimos el archivo AdminLTE-3.1.0.ZIP y copiamos las carpetas "plugins" y "dist" a la carpeta de trabajo "src" que se encuentra en "nodeCAN" quedando de la siguiente forma
```
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
     |__package.json_
````     
_5.  Mediante la consola ingresamos a la ubicación de la carpeta "nodeCAN", dentro de ella ejecutamos:_
```
npm install
```
        
_este comando instalará los módulos necesarios para el proyecto, que se encuentran en el archivo package.json._

_si la opción 5 tiene problemas, podemos instalar cada módulo por separado:_ 
    
```
>> npm install express@4.17.1
>> npm install mysql@2.18.1
>> npm install serialport@9.2.0
>> npm install socket.io@4.1.2
```
_La carpeta principal quedaría:_
```    
    nodeCAN
     |
     |__node_modules
     |__src
     |__index.js
     |__package.js
 ```
 _En donde node_modules es la carpeta contenedora de los módulos instalados_
_6. Accedemos a la carpeta "nodeCAN" desde la consola de comandos y ejecutamos:_

 ```
 node index.js
 ```
    
_7. Abrimos nuestro navegador firefox y escribimos en la dirección:_ 
    localhost:3000

## Notas 

_si al ejecutar el archivo index.js da un aviso de problemas con el puerto, se puede acceder al archivo index.js y modificar el código:_
```
const port = new SerialPort( 'COM4', {baudRate: 9600} )
```
_quí podemos cambiar el puerto serial: COM1, COM2, COM3 etc._




## Construido con 🛠️

* [Visual Studio COde](https://code.visualstudio.com/download) - IDE 
* [Node JS](https://nodejs.org/es/) - Usado para el Servidor
* [Express](https://expressjs.com/es/) - Librería para el Servidor
* [node Puerto serial](https://serialport.io/docs/guide-installation/) - Puerto de comunicación serial
* [npm]() - Manejador de dependencias
* [Git](https://git-scm.com/download/win) - Usado para versiones
* 



    
