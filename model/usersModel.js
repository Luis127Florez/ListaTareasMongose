const mongoose = require('mongoose');

const usersShema =  mongoose.Schema({
  user :{
    type: String
  },
  pass :{
    type: String
  }
});

module.exports = mongoose.model('users', usersShema)