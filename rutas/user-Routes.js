const express = require('express');
const RutasUsers = express.Router();
const jwt = require("jsonwebtoken");
const usersShema = require('../model/usersModel');
require('dotenv').config();

RutasUsers.post('/users', async (req, res, nex)=>{
    const users = [{user:"morris",pass:"2020"},{user:"luis",pass:"4040"}]
    try {
        const {user , pass}= req.body;

        const usuario = await usersShema.find( { user : user, pass : pass })
        /* const usuario = users.filter(item => item.user == user  && item.pass == pass) */
        console.log(usuario[0]);
        if (usuario.length) {
            const obj = {user , pass}
            const token = jwt.sign(
                obj,
                `${process.env.PALABRACLAVE}`,
                { expiresIn: 43200}
              );
            res.json({obj,token});
        }else{
            res.json("usuario erroneo")
        }
    } catch (error) {
        console.log(error);
        res.send("error")
    }


})
module.exports = RutasUsers;