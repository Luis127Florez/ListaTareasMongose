const mongoose = require('mongoose');

const TareasShema =  mongoose.Schema({
  Nombre :{
    type: String
  },
  Dess :{
    type: String
  },
  estado:{
    type: Boolean
  }
});

module.exports = mongoose.model('Tareas', TareasShema)