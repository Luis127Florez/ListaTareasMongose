const express = require('express');
const RutasTareasedit = express.Router();
const TareasShema = require('../model/tareasModel');
const {validarParametros} = require('./middelwares/middelware');


RutasTareasedit.get('/tareas', async (req, res)=>{
    try {
        const tareas = await TareasShema.find({},{__v:0});
        res.status(200).json(tareas)
    } catch (error) {
        res.status(500).json("error en el server");
        console.log(error);
    }
});



RutasTareasedit.get('/tareas/:propiedad',validarParametros, async (req, res)=>{
    const {propiedad}=req.params;
    
    if (propiedad == 'completadas'){
        try {
            const tareas = await TareasShema.find({estado:true});
            res.status(200).json(tareas)
        } catch (error) {
            res.status(500).json("error en el server")
            console.log(error);
        }  
    }
    if (propiedad == 'incompletas') {
        try {
            const tareas = await TareasShema.find({estado:false});
            res.status(200).json(tareas)
        } catch (error) {
            res.status(500).json("error en el server")
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
        res.status(500).json("error en el server")
        console.log(error);
    }
});


module.exports = RutasTareasedit;