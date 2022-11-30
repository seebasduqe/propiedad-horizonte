Esta es la app de propiedad horizonte para interactuar con la base de datos propiedad horizonte

## Que hace la app
Lista tablas agrupadas cargadas de informacion bajo un mismo contexto,
las cuales se puede manipular como crear, editar, y borrar informacion de esas tablas


## Como se distribuye la app

En src es donde esta el codigo fuente de la app, funciona como aplicacion de 3 capas, 
cliente-servidor-base de datos.

## cliente

En la parte del cliente tenemos un index con la direccion ip http//localhost:3000 
donde se vizualiza el menu, tablas con las diferentes entidades y opciones como botones y formularios para manipular la informacion.
Las tablas de los distintos componentes estan ubicacadas en la carpeta components.

## servidor

En la parte del servidor que esta ubicado en la carperta page/api, tenemos la conexion a la base de datos, y aplicamos las query sql
para recuperar datos de la base de datos y mediante una rest api mandamos estos datos mediante protocolo http al cliente

- En la carpeta utils se encuentra el archivo de configuracion para la conexion de la base de datos

