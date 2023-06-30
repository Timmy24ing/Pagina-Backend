//Importando los paquetes
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'express-flash-message';
//Importar los Middleware
import privada from './routes/privada'
import publica from './routes/publica';
//declarando los paquetes
const App = express();
const {aplicacion} = require ('express');
const {request} = require('http');
const admin = require('express-session'); 
const user = require('express-session');

App.use(session({
    secret:'secret-token',
    resave:true,
    saveUninitializated:true
}))

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extends:true}))
//Renderizado
App.set("view engine", "ejs")

//Middleware
App.use(privada)
App.use(publica)
//Routes
App.get("/", function(pet,res) {
    res.render("pages/index")
})
//API
App.get("/api", function (pet,res){
    res.json({api:"works"})
})

//Puerto donde escucha
App.listen(5050, function(){
    console.log("servidor iniciado")
})