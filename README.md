# Evaluar Challenge

## Instalar las dependencias.

    npm install

#### Crear la base de datos de MySql con el nombre ```evaluar_development``` que aparece en el fichero con la siguiente ruta ```config/config.json```,
#### en este mismo archivo de configuracion se pueden editar los paramatros de acceso a la base de datos para la comunicación,
#### asi como el usuario y la contraseña.
#### Una vez creada la misma instalar el paquete  ```sequelize-cli``` de manera global con el siguiente comando:

    npm i sequelize-cli -g


## Una vez creada utilizar los ```seeders```

    sequelize db:seed:all


#### Las tablas han de crearse de forma automática, en caso de no ocurrir por cualquier problema de compatibidad, revisar el username y el password en la carpeta config y hacer que se corresponda a su configuración.

## Ejecutar la App

    npm run dev

## NOTA
##Todos los endpoints de API están protegidos, por lo que el uso del la autenticación es obligatorio.

#### Para un facil manejo de esto fueron creadas en POSTMAN, collecciones y variables de collección las cuales se encargarán de hacer que cada enpoint
#### de la API tenga un token válido para ello el primer paso es la autenticacion.
#### De forma concurrente a medida que se prueban los enpoints se pueden ir observando las pruebas unitarias realizadas a los mismos en el apartado de ```Test Results```,
####  en la misma herramienta.
