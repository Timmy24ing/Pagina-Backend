//declaracion de librerias
import express from 'express';

//declarar las librerias
const publica = express();

publica.get('/home', function(pet,res){
    res.render('pages/index')
})

export default publica; 