const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inventarioDB',{useNewUrlParser: true})
    .then( ()=>{
        console.log("Bae de datos conectad.")
    })
    .catch( ()=>{
        console.log("Hubo un error conectandose a la base de datos.")
    })

    mongoose.connection.on('error',(err)=>{
        console.log('Mongoose error:'+err);
        process.exit(0);
    });
    mongoose.connection.on('disconnected',()=>{
        console.log("Base de dats desconectada.")
    })