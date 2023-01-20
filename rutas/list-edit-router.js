const express = require('express');
const RutasTareasedit = express.Router();
const TareasShema = require('../model/tareasModel');

RutasTareasedit.post('/tareas', async (req, res)=>{
    try {
        const tarea = TareasShema(req.body)
        await tarea.save();
        res.json(tarea)
    } catch (error) {
        console.log(error);
    }
});


RutasTareasedit.put('/tareas/:id', async (req, res)=>{
    const {id} = req.params;  
    try {
        const tarea = await TareasShema.findById(id);
        await tarea.update(req.body);
        const newtarea = await TareasShema.findById(id);
        res.json(newtarea);
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