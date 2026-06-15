const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {

    });
});


let fila = [];
let senha;
let senhaAtual, nomeAtual, guicheAtual;

app.post('/pegarSenha', (req, res) => {
    fila = [
        {
            senha: gerarSenha(),
            nome: gerarNome(),
        },
        {
            senha: gerarSenha(),
            nome: gerarNome(),
        },
        {
            senha: gerarSenha(),
            nome: gerarNome(),
        }
    ];

    senha = gerarSenha();
    senhaAtual = gerarSenha();
    nomeAtual = gerarNome();
    guicheAtual = 4;
    
    let nome = req.body.nome.toUpperCase();
    fila.push(
        {
            senha: senha,
            nome: nome,
        }
    );

    res.render('fila', {
        senha: senha,
        fila: fila,
        senhaAtual: senhaAtual,
        nomeAtual: nomeAtual,
        guicheAtual: guicheAtual
    });
});



app.post('/atualizar', (req, res) => {
    let rng = Math.floor(Math.random() * 2) + 1;

    if(rng == 1) {
        fila.push(
            {
                senha: gerarSenha(),
                nome: gerarNome()
            }
        );
    }
    else {
        if(!fila.length == 0){
            const tirado = fila.shift();
            senhaAtual = tirado.senha;
            nomeAtual = tirado.nome;
            guicheAtual = Math.floor(Math.random() * 15) + 1;
        }
    }

    res.render('fila', {
        senha: senha,
        fila: fila,
        senhaAtual: senhaAtual,
        nomeAtual: nomeAtual,
        guicheAtual: guicheAtual
    });
});




function gerarSenha(){
    let senha = "";
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for(let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(index);
    }
    return senha;
}


function gerarNome(){
    const nomes = ["PEDRO", "JOSÉ", "JOÃO", "ANTÔNIO", "FRANCISCO", "CARLOS", "LUCAS", "LUIZ", "PAULO", "GABRIEL",
        "MARCOS", "DAVI", "RAFAEL", "LUIS", "DANIEL", "MIGUEL", "GUSTAVO", "FELIPE", "GUILHERME", "EDUARDO",
        "MATHEUS", "BRUNO", "MARCELO", "ARTHUR", "LEONARDO", "RODRIGO", "ANDRÉ", "SAMUEL", "FERNANDO", "FÁBIO"];

    const meio = ["DO", "DE"];

    const sobrenomes = ["SILVA", "SANTOS", "OLIVEIRA", "SOUZA", "LIMA", "PEREIRA", "FERREIRA", "ALVES",
    "RODRIGUES", "COSTA", "GAMES", "NASCIMENTO", "MELO", "NUNES", "FREITAS", "BRITO", "JESUS", "ALMEIDA",
    "MOURA", "BARROS", "MENDES", "JÚNIOR", "BARBOSA", "CONCEIÇÃO", "CRUZ", "GONÇALVES", "FERNANDES", "ANDRADE",
    "BATISTA", "SANTANA", "LOPES", "MARTINS", "PINHEIRO", "MONTEIRO", "MACHADO", "ROCHA", "SEVERO", "ORNAX"];

    let rngNomes = Math.floor(Math.random() * nomes.length);
    let rngNomesMeio = Math.floor(Math.random() * meio.length);
    let rngSobrenome1 = Math.floor(Math.random() * sobrenomes.length);
    let rngSobrenome2 = Math.floor(Math.random() * sobrenomes.length);

    let nome = "";
    nome += nomes[rngNomes] + " " + sobrenomes[rngSobrenome1] + " " + meio[rngNomesMeio] + " " + sobrenomes[rngSobrenome2];
    return nome;
}




app.post('/voltar', (req, res) => {
    res.render('index', {
        
    });
})



app.listen(8081, () => {
    console.log(`Servidor rodando no localhost:8081`);
});