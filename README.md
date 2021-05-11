# Controlca App

Aplicación web para el control de horas hombre y
supervisión de proyectos para la empresa <strong>Controlca.</strong>

# Requisitos para la instalación

La aplicación fue desarrollada bajo la arquitectura cliente-servidor y utiliza una base de datos para el almacenamiendo de datos, por lo tanto se requiere tener instalado los siguientes programas o frameworks para ser utilizada de manera local:

- Máquina con sistema operativo Windows, Linux o Mac.
- <a href="https://nodejs.org/en/" target="blank"><strong>NodeJs</strong></a> version 12.17.0 LTS o superior
- <a href="https://www.npmjs.com/package/ts-node" target="blank"><strong>ts-node</strong></a> version 8.10.2 LTS o superiorts-node.
- <a href="https://www.postgresql.org/" target="blank"><strong>PostgreSQL</strong></a> para almacenamiento de datos.
- <a href="https://vuejs.org/v2/guide/installation.html" target="blank"><strong>VueJS</strong></a> Version 2.0 para la ejecución del cliente.
- <a href="https://expressjs.com/es/" target="blank"><strong>ExpressJS</strong></a> para la ejecucion del servidor.
- Continuar con la lectura de este documento para su correcta instalación.
- <strong>Recuerda,</strong> el repositorio del servidor está alojado <a href="https://github.com/david-monroy/controlca-server" target="blank">aquí</a>.
- Y el repositorio del cliente está alojado <a href="https://github.com/david-monroy/controlca-client" target="blank">aquí</a>.

# Instalación de Controlca App

Para instalar deberá seguir los siguientes pasos:

1. <strong>Instalación del cliente: </strong>
   Dirigirse a la carpeta raíz del <a href="https://github.com/david-monroy/controlca-client" target="blank">cliente</a> y ejecutar el siguiente comando

Linux,macOS y:

```
$ npm install
```

Windows:

```
$ npm install
```

Además, deberá configurar las rutas de la API_URL para determinar el puerto a utilizar (por defecto es 8081).

2. <strong>Instalación del servidor: </strong>
   Dirigirse a la carpeta raíz del <a href="https://github.com/david-monroy/controlca-server" target="blank">servidor</a> y ejecutar el siguiente comando

Linux,macOS y:

```
$ npm install
```

Windows:

```
$ npm install
```

Además, deberá configurar las rutas de las diferentes variables de entorno (ponerse en contacto con el desarrollador para mayor facilidad y localización).

3. <strong>Instalación del Base de datos: </strong>

La base de datos está alojada en <a href="https://id.heroku.com/" target="blank">Heroku</a>, para obtener las credenciales de acceso ponerse en contacto con el desarrollador, y luego podrá gestionarla desde su máquina a través de pgAdmin (PostgreSQL).

# Uso de Controlca App

Tras completar la instalación, para comenzar a utilizar la aplicación (de manera local en producción) deberá seguir los siguientes pasos:

1. <strong>Iniciar el cliente: </strong>
   Dirigirse a la carpeta raíz del cliente y ejecutar el siguiente comando

Linux,macOS y:

```
$ npm run start
```

Windows:

```
$ npm run start
```

2. <strong>Iniciar el servidor: </strong>
   Dirigirse a la carpeta raíz del servidor y ejecutar el siguiente comando

Linux,macOS y:

```
$ npm run start
```

Windows:

```
$ npm run start
```

3. Disfrutar de la aplicación
   Dirijase a su navegador web de preferencia y acceda a la direccion <a href="http://localhost:8081/" target="blank"><strong>http://localhost:8081/ </strong></a>.

   Recuerda que si se modificó el puerto, deberá sustituirlo en el enlace.

# Desarrolladores

Este producto fue desarrollado por:

- David Monroy [@david-monroy](https://github.com/david-monroy) 📖

# Contacto

Para mayor informacion a cerca de las técnicas y metodologías de desarrollo del producto, contatar el desarrollador a través de la plataforma <a href="https://github.com/" target="blank"><strong>Github</strong></a>
