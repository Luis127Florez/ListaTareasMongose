const express = require('express');
const RutasTareasedit = express.Router();
const TareasShema = require('../model/tareasModel');
const {validarParametros} = require('./middelwares/middelware');


RutasTareasedit.get('/tareas', async (req, res)=>{
    try {
        const tareas = await TareasShema.find();
        res.json(tareas)
    } catch (error) {
        console.log(error);
    }
});



RutasTareasedit.get('/tareas/:propiedad',validarParametros, async (req, res)=>{
    const {propiedad}=req.params;
    
    if (propiedad == 'completadas'){
        try {
            const tareas = await TareasShema.find({estado:true} );
            res.json(tareas)
        } catch (error) {
            console.log(error);
        }  
    }
    if (propiedad == 'incompletas') {
        try {
            const tareas = await TareasShema.find({estado:false} );
            res.json(tareas)
        } catch (error) {
            console.log(error);
        }
        
    }
    
});


RutasTareasedit.get('/tareasbyId/:id',validarParametros ,async (req, res)=>{
    try {
        const {id} = req.params;  
        const tareas = await TareasShema.findById(id);
        res.json(tareas)
    } catch (error) {
        res.json("no existe una tarea con ese id")
        console.log(error);
    }
});


module.exports = RutasTareasedit;