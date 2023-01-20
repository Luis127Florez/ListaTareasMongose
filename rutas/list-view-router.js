const express = require('express');
const RutasTareasedit = express.Router();
const TareasShema = require('../model/tareasModel');


RutasTareasedit.get('/tareas', async (req, res)=>{
    try {
        const tareas = await TareasShema.find();
        res.json(tareas)
    } catch (error) {
        console.log(error);
    }
});

RutasTareasedit.get('/tareas/completadas', async (req, res)=>{
    try {
        const tareas = await TareasShema.find({estado:true} );
        res.json(tareas)
    } catch (error) {
        console.log(error);
    }
});

RutasTareasedit.get('/tareas/incompletadas', async (req, res)=>{
    try {
        const tareas = await TareasShema.find({estado:false} );
        res.json(tareas)
    } catch (error) {
        console.log(error);
    }
});


RutasTareasedit.get('/tareas/:id', async (req, res)=>{
    try {
        const {id} = req.params;  
        const tareas = await TareasShema.findById(id);
        res.json(tareas)
    } catch (error) {
        console.log(error);
    }
});


module.exports = RutasTareasedit;