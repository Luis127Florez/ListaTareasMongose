require('dotenv').config();
const jwt = require("jsonwebtoken");


const verificarToken = async (req, res, next) =>{
    try {
        const {token}= req.headers
        console.log(token);
        if(!token)return res.status(403).json({msg:"token null"});
        const decode = jwt.verify(token ,`${process.env.PALABRACLAVE}`);
        next();
    } catch (error) {
        console.log(error);
        res.status(404).json("token not foud");    
    }
    
}
module.exports = verificarToken