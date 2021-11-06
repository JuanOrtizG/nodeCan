# nodeCan

_Software web para la visualización de datos vehiculares con sistemas OBD II y J1939, este readme presenta el proceso de instalación en sistemas operativos windows_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Necesitamos algunas herramientas instaladas en nuestro computador para poder desplegar el sistema_

```
Debemos tener instalado NODE JS en nuestro sistema operativo: https://nodejs.org/es/
```

### Instalación 🔧

_1. Se debe descargar la librería AdminLTE para tenerla preparada : https://adminlte.io/    https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.1.0
    la versión utilizada es la 3.1.0_
    
_2. Se debe descargar la librería AdminLTE para tenerla preparada : https://adminlte.io/    https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.1.0
    la versión utilizada es la 3.1.0_
    
_3. Descargamos el archivo principal .ZIP de https://github.com/JuanOrtizG/nodeCan, lo descomprimimos, cambiamos el nombre a "nodeCAN"._

_4. la carpeta "nodeCAN" lleva los siguientes fichero_ 

_la carpeta "nodeCAN" lleva los siguientes ficheros:_
    nodeCAN
     |
     |__src
     |__index.js
     |__package.json
     
_5. Descomprimimos el archivo AdminLTE-3.1.0.ZIP y copiamos las carpetas "plugins" y "dist" a la carpeta de trabajo "src" que se encuentra en "nodeCAN" quedando de la siguiente forma

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
     
_6.  Mediante la consola ingresamos a la ubicación de la carpeta "nodeCAN", dentro de ella ejecutamos:_
```
npm install
```
        
_este comando instalará los módulos necesarios para el proyecto, que se encuentran en el archivo package.json._

_si la opción 6 tiene problemas, podemos instalar cada módulo por separado:_ 
    
```
>> npm install express@4.17.1
>> npm install mysql@2.18.1
>> npm install serialport@9.2.0
>> npm install socket.io@4.1.2
```

_7. Accedemos a la carpeta "nodeCAN" desde la consola de comandos y ejecutamos:_

 ```
 node index.js_
 ```
    
_8. Abrimos nuestro navegador firefox y escribimos en la dirección:_ 
    localhost:3000
    
_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊

    
