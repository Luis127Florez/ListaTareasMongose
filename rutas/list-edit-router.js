const express = require('express');
const RutasTareasedit = express.Router();
const {validacionbody} = require('../rutas/middelwares/middelware');
const TareasShema = require('../model/tareasModel');

RutasTareasedit.use(validacionbody);

RutasTareasedit.post('/tareas', async (req, res)=>{
    try {
        const tarea = TareasShema(req.body)
        await tarea.save();
        res.json(tarea);
    } catch (error) {
        console.log(error);
    }
});


RutasTareasedit.put('/tareas/:id', async (req, res)=>{
    const {id} = req.params;  
    try {
        const tarea = await TareasShema.updateOne({_id: id}, req.body);
        res.json(tarea);
    } catch (error) {
        console.log(error);
    }
});

RutasTareasedit.delete('/tareas/:id', async (req, res)=>{
    const {id} = req.params;  
    try {
        const tarea = await TareasShema.findById(id);
        await tarea.remove({_id:id});
        res.json("Tarea Eliminada");
    } catch (error) {
        console.log(error);
    }
});

module.exports = RutasTareasedit;