# nodeCan

_Software web para la visualizaci贸n de datos vehiculares con sistemas OBD II y J1939, este readme presenta el proceso de instalaci贸n en sistemas operativos windows_

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

### Pre-requisitos 馃搵

_Necesitamos algunas herramientas instaladas en nuestro computador para poder desplegar el sistema_

```
Debemos tener instalado NODE JS en nuestro sistema operativo: https://nodejs.org/es/
Debemos en preferencia tener instalado el navegador FIREFOX. 
```

### Instalaci贸n 馃敡 

_1. Se debe descargar la librer铆a AdminLTE para tenerla preparada : [AdminLTE](https://adminlte.io/)    [AdminLTE-3.1.0](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.1.0)
    la versi贸n utilizada es la 3.1.0_
    
_2. Descargamos el archivo principal .ZIP del [software CAN](https://github.com/JuanOrtizG/nodeCan), lo descomprimimos, cambiamos el nombre a "nodeCAN"._

_3. la carpeta "nodeCAN" lleva los siguientes fichero_ 

_la carpeta "nodeCAN" lleva los siguientes ficheros:_

```
nodeCAN
鈹溾攢鈹? src
鈹溾攢鈹? index.js
鈹斺攢鈹? package.json
```

_4. Descomprimimos el archivo AdminLTE-3.1.0.ZIP y copiamos las carpetas "plugins" y "dist" a la carpeta de trabajo "src" que se encuentra en "nodeCAN" quedando de la siguiente forma
    
```
nodeCAN
鈹溾攢鈹? src
鈹?   鈹溾攢鈹? plugins
鈹?   鈹溾攢鈹? dist
鈹?   鈹溾攢鈹? css
|   鈹斺攢鈹? img
|
鈹溾攢鈹? index.js
鈹斺攢鈹? package.json
```
_5.  Mediante la consola ingresamos a la ubicaci贸n de la carpeta "nodeCAN", dentro de ella ejecutamos:_
```
npm install
```
        
_este comando instalar谩 los m贸dulos necesarios para el proyecto, que se encuentran en el archivo package.json._

_si la opci贸n 5 tiene problemas, podemos instalar cada m贸dulo por separado:_ 
    
```
>> npm install express@4.17.1
>> npm install mysql@2.18.1
>> npm install serialport@9.2.0
>> npm install socket.io@4.1.2
```
_La carpeta principal quedar铆a:_

 ```
nodeCAN
鈹溾攢鈹? node_modules
鈹溾攢鈹? src   
鈹溾攢鈹? index.js
鈹斺攢鈹? package.js
 ```
 _En donde node_modules es la carpeta contenedora de los m贸dulos instalados_
 
_6. Accedemos a la carpeta "nodeCAN" desde la consola de comandos y ejecutamos:_

 ```
 node index.js
 ```
    
_7. Abrimos nuestro navegador firefox y escribimos en la direcci贸n:_ 
    localhost:3000

## Notas 

_si al ejecutar el archivo index.js da un aviso de problemas con el puerto, se puede acceder al archivo index.js y modificar el c贸digo:_
```
const port = new SerialPort( 'COM4', {baudRate: 9600} )
```
_qu铆 podemos cambiar el puerto serial: COM1, COM2, COM3 etc._




## Construido con 馃洜锔?

* [Visual Studio COde](https://code.visualstudio.com/download) - IDE 
* [Node JS](https://nodejs.org/es/) - Usado para el Servidor
* [Express](https://expressjs.com/es/) - Librer铆a para el Servidor
* [node Puerto serial](https://serialport.io/docs/guide-installation/) - Puerto de comunicaci贸n serial
* [npm]() - Manejador de dependencias
* [Git](https://git-scm.com/download/win) - Usado para versiones
* 



    
