'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

//conexion base de datos
mongoose.connect('mongobd://localhost:27017/curso_mean2', (err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log("La conexion a la base de datos esta corriendo correctamente...");
        app.listen(port, function()
        {
            console.log("Servidor del API Rest escuchando en http://localhost:"+port);
        })
    }
});