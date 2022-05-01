
// Configuracoes

const Express = require('express');
const express = Express();

const bodyParser = require('body-parser');
express.use(bodyParser.urlencoded({extended: false}));
express.use(bodyParser.json());

const methodOverride = require('method-override');
express.use(methodOverride('_method'));

const handlebars = require('express-handlebars');
express.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
express.set('view engine', 'handlebars');
express.set('views', 'views');

const Banco = require('./Models/banco').Banco;
const tbInformacoes = require('./Models/tbdados');


//Rotas

express.get("/", async(req, res) => {

    tbInformacoes.findAll().then(function(data){

        res.render('pag1', {

            mostrarTitulo: true,
            dados: data
        })
    })

})

//funcionalidades para inserir
express.get("/pag2", function(req, res){
    res.render('pag2');
})

express.post("/salvar", function(req, res){

    tbInformacoes.create({
        nome: req.body.inpnome,
        sobrenome: req.body.inpsobrenome,
        cpf: req.body.inpcpf,
        rg: req.body.inprg,
        datanascimento: req.body.dtnasc
    }).then(function(){

        res.redirect("/");
    }).catch(function(erro){

        res.send("ocorreu um erro: " + erro);
    })
})

//funcionalidades para exlcuir
express.get("/pag4/:id", async function(req, res){

    await tbInformacoes.findAll({where: { id: req.params.id } }).then(function(dados){

        res.render('pag4', {

            titulo:true,
            dados: dados
        });
    })
})

express.delete('/apagar/:id', async function(req, res){

    tbInformacoes.destroy({
        where: {id: req.params.id}
    }).then(function(){

        res.redirect('/');
    });
})


// funcionalidades para editar
express.get('/pag3/:id', function(req, res){

    tbInformacoes.findAll({where: {id: req.params.id}}).then(function(data){

        res.render('pag3', {data: data});
    })
})

express.put('/salvaredicao/:id', function(req, res){

    tbInformacoes.update(
        {
            nome: req.body.inpnome, 
            sobrenome: req.body.inpsobrenome,
            cpf: req.body.inpcpf,
            rg: req.body.inprg
        }, 
        {where: {id: req.params.id}}).then(function(){

            res.redirect('/');
    });
})



express.listen(5001, function(){

    console.log("Servidor rodando!");
})
// url -> localhost:5001