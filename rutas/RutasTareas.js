const express = require('express');
const RutasTareas = express.Router();
const TareasShema = require('../model/tareasModel');


RutasTareas.get('/tareas', async (req, res)=>{
    try {
        const tareas = await TareasShema.find();
        res.json(tareas)
    } catch (error) {
        console.log(error);
    }
});

RutasTareas.post('/tareas', async (req, res)=>{
    try {
        const tarea = TareasShema(req.body)
        await tarea.save();
        res.json(tarea)
    } catch (error) {
        console.log(error);
    }
});

module.exports = RutasTareas;