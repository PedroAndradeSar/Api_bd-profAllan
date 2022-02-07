const {Router} = require("express");
const { criar, listar, buscarPorId, atualizar, remover } = require ("../controller/usuario");
const router = Router();

//devolver uma lista ou um objeto
router.get("/:id?", async (req, res) => {
    try {
        const { id } = req.params;
        let resposta;

        if (id) {
            resposta = await buscarPorId(id)
        } else {
            resposta = await listar();
        }
        
        res.send(resposta);
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ erro });
    }
});

//criar um novo recurso 
router.post("/", async (req, res) => {
    try { 
        const {nome, email, senha } = req.body;

        const usuarioCriado = await criar (nome, email, senha);

        res.send(usuarioCriado);
    } catch (erro) {
        res.status(500).send({ erro });
    }
    //console.log(req.body)
    //res.send("Rota para criar usuarios");
});

//Atualizar um recurso existente
router.put("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let dados = req.body;

        await atualizar (id, dados); //ou await atualizar(id, nome, email, senha)  
        const resultado = await buscarPorId(id)
        res.send(resultado);
    } catch (erro) {
        res.status(500).send({ erro });
    }
});

//deleter um recurso existente
router.delete("/:id", async (req, res) => {
    try{
        await remover(req.params.id);

        res.send();
    } catch(erro){
        console.log(erro);
        res.status(500).send({ erro });
    }  
});

module.exports = router;