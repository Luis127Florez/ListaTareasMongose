const express = require('express');
const Mongose = require("mongoose")
const app = express();
const port = "8004";
const RutasTareas = require('./rutas/RutasTareas')


Mongose.set("strictQuery", false);
Mongose.connect("mongodb+srv://root:Salchipapa123+-.@cluster0.zgzjdds.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected to MongoDB!"))
.catch((error)=> console.log(error));

app.use(express.json());
app.use('/app', RutasTareas);

app.listen( port , ()=>{
    console.log(`server lista tares corriendo en el puerto ${port}`);
});