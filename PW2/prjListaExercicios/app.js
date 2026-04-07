const PORT = 8081;
const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.render('index', {
        nome: null,
        email: null,
        assunto: null,
        mensagem: null
    })
})

app.get('/cadastroVeiculo', (req, res)=>{
    res.render('cadastroVeiculo', {
        marca: null,
        modelo: null,
        cor: null,
        valor: null,
        classe: 'tabelaDadosAzuis'
    })
})

app.get('/fibonacci', (req, res)=>{
    res.render('fibonacci', {
        numero: null,
        resultado: null
    })
})


app.post('/enviarContato', (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const assunto = req.body.assunto;
    const mensagem = req.body.mensagem;

    res.render('index', {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    });
})


app.post('/enviarCadastroVeiculo', (req, res)=>{
    const marca = req.body.marca;
    const modelo = req.body.modelo;
    const cor = req.body.cor;
    const valor = parseInt(req.body.valor);
    let classe = 'tabelaDadosAzuis';

    if(valor > 100000)
        classe = 'tabelaDadosVermelhos';

    res.render('cadastroVeiculo', {
        marca: marca,
        modelo: modelo,
        cor: cor,
        valor: valor,
        classe: classe
    })
})


app.post('/enviarFibonacci', (req, res)=>{
    const numero = parseInt(req.body.numero);
    
    let anterior1 = 0;
    let anterior2 = 1;
    let resultado = "";

    for(i=0; i<numero; i++){
        resultado += `${anterior1} `
        proximoTermo = anterior1 + anterior2;
        anterior1 = anterior2;
        anterior2 = proximoTermo;
    }

    res.render('fibonacci', {
        resultado: resultado
    })
})


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})