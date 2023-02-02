const express = require('express');
const RutasTareasedit = express.Router();
const {validacionbody} = require('../rutas/middelwares/middelware');
const TareasShema = require('../model/tareasModel');

RutasTareasedit.use(validacionbody);

RutasTareasedit.post('/tareas', async (req, res)=>{
    try {
        const tarea = TareasShema(req.body)
        await tarea.save();
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json("error en el server");
        console.log(error);
    }
});


RutasTareasedit.put('/tareas/:id', async (req, res)=>{
    const {id} = req.params;  
    try {
        const tarea = await TareasShema.updateOne({_id: id}, req.body);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json("error en el server");
        console.log(error);
    }
});

RutasTareasedit.delete('/tareas/:id', async (req, res)=>{
    const {id} = req.params;  
    try {
        const tarea = await TareasShema.findById(id);
        await tarea.remove({_id:id});
        res.status(200).json("Tarea Eliminada");
    } catch (error) {
        res.status(500).json("error en el server");
        console.log(error);
    }
});

module.exports = RutasTareasedit;