const express = require ("express");
const app = express();

app.use (express.json());

const usuario = require("./rotas/usuario");  //usado para fazer a rota, chamar a rota
const nota = require("./rotas/nota");
const{ sequelize } = require ("./bd")

app.get("/", (req, res) => {
    res.send({ mensagem: "bem vindo!!!"});
    
});

app.use("/usuario", usuario);
app.use("/nota", nota);

app.listen(3001, () => {
    console.log("Aplicação iniciada")
});

