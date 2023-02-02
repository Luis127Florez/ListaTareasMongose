const express = require('express');
const Mongose = require("mongoose")
const app = express();
const port = "8004";
const RutasTareasedit = require('./rutas/list-edit-router');
const RutasTareaslist = require('./rutas/list-view-router');
const {validacionPeticion, validarurl} = require('./rutas/middelwares/middelware');
const RutasUsers = require('./rutas/user-Routes');
const verificarToken = require('./rutas/middelwares/auhtjwt');
require('dotenv').config();


app.use(express.json());
Mongose.set("strictQuery", false);
Mongose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zgzjdds.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log("Connected to MongoDB!"))
.catch((error)=> console.log(error));

app.use(validacionPeticion);
app.use(validarurl);


app.use('/app', RutasUsers)
app.use('/app', verificarToken,RutasTareaslist);
app.use('/app', verificarToken,express.json(),RutasTareasedit);

app.listen( port , ()=>{
    console.log(`server lista tares corriendo en el puerto ${port}`);
});