'use strict'

var mongoose = requiere('mongoose');

//conexion base de datos
mongoose.connect('mongobd://localhost:27017/curso_mean2', (err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log("La conexion a la base de datos esta corriendo correctamente...");
    }
});