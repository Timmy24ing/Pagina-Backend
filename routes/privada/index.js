//importar librerias
import express from 'express';



//declarar librerias
const privada = express.Router();


privada.get("/admin/home", function(pet,res){
    res.render("user/index")
})


export default  privada;