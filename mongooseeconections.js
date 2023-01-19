const Mongose = require("mongoose")

Mongose.connect("mongodb+srv://root:Salchipapa123+-.@cluster0.zgzjdds.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected to MongoDB!"))
.catch((error)=> console.log(error));

module.exports = Mongose; 