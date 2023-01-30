const express = require('express');
const Mongose = require("mongoose")
const app = express();
const port = "8004";
const RutasTareasedit = require('./rutas/list-edit-router');
const RutasTareaslist = require('./rutas/list-view-router');
const {validacionPeticion, validarurl} = require('./rutas/middelwares/middelware');


Mongose.set("strictQuery", false);
Mongose.connect("mongodb+srv://root:Salchipapa123+-.@cluster0.zgzjdds.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected to MongoDB!"))
.catch((error)=> console.log(error));

app.use(express.json());
app.use(validacionPeticion);
app.use(validarurl);
app.use('/app', RutasTareaslist);
app.use('/app', RutasTareasedit);

app.listen( port , ()=>{
    console.log(`server lista tares corriendo en el puerto ${port}`);
});