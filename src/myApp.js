//Importando los paquetes
import express from 'express';
//declarando los paquetes
const App = express();
//Renderizado
App.set("view engine", "ejs")

//Middleware

//Routes
App.get("/", function(pet,res) {
    res.render("Index")
})
//API
App.get("/api", function (pet,res){
    res.json({api:"works"})
})

//Puerto donde escucha
App.listen(5050, function(){
    console.log("servidor iniciado")
})