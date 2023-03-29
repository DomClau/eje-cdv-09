//Declaraciones
const { request, response } = require("express");
const express = require("express");
const app = express(); //Responder solicitudes de clientes= Chrome
const port = process.env.PORT || 3000; //Para cuando realizemos en Deploy (despliegue)
//para obtener un recurso del servidor http://localhost:3000 .  "request" es la peticion y "response" es la respuesta
app.get("/",(req,res)=>{
    res.send("Hola. Este es un servidor en Node.js con express");
});

app.get("*",(req,res)=>{
    res.send("404 | pagina no encontrada");
});
//Proceso
app.listen(port,()=>{
    console.log("Servidor en Node.js con express escuchando en el puerto 3000",port);
});