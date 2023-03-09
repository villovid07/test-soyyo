# Prueba Hernan David Villota (SoyYo)

## Api para consumir servicio de entidades

Para la ejecucion del proyecto se requieren los siguientes pasos:

- instalar las dependencias con npm install
- correr el proyecto con npm start
- para la realizacion de pruebas unitarias se debe hacer con el comando npm test

Por defecto corre por el puerto 3000, si se desean cambiar los parametros de configuracion se puede hacer a traves del archivo **.ENV**

La especificacion del formato de solicitud y respuesta cumplen con los especificados en la prueba la url para realizar las peticiones es la siguiente "/entities/filter"

### Peticion

`{
    "startId":1,
    "endId":3
}`

### Respuesta

`
{
"items": [
{
"entityId": 1,
"name": "Tuya",
"identificationNumber": "123456789",
"expirationDate": "2030-10-27",
"contactName": "Ana Maria Palacio",
"contactMail": "APalacioH@tuya.com.co",
"logo": ""
}
]
}`
