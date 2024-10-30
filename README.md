# Prueba Técnica FoniCredito 📱
![icondos](https://github.com/user-attachments/assets/4f8e7cc4-f73c-44b9-bfa0-6ccd42b9e675)

> Explicación de desarrollo:
La aplicación tiene un login y una pantalla donde se muestra una lista sencilla de elemento,
se busco ponerle mas atención a crear una estructura escalable de la aplicación dividiendo los componentes,
uso del servidor, recursos gráficos entre otros separando la información pensando en escalabilidad de código.


- Pasos para utilizar proyecto en local:

>> cd Foni_Cred_Test
>> npm install

- Encender servidor:
en carpeta raíz ejecutar:
>> json-server --watch db.json --host <tu IP> --port 3000
Ej: json-server --watch db.json --host 192.168.1.23 --port 3000

- Modificar baseUrl en proyecto:
ir a: 
src/constans/index.js 
modificar BASEURL = "http://tulocalip:3000"
ej: "http://192.168.1.26:3000"

- iniciar aplicación:
>> npx expo start
utilizar dispositivo real o abrir emulador.

Puedes modificar la BD en el archivo db.json, asegurese de mantener la integridad de los datos para evitar errores.

Comenzar a utilizar.

