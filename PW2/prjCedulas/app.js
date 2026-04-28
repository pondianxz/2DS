const PORT = 8081;
const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.render("index", { resultado: null });
});

app.post('/enviarDinheiro', (req, res) => {
    let num = req.body.num;
    const cedulas = [200, 100, 50, 20, 10, 5, 2, 1];
    let resultado = [];
    
    for(let cedula of cedulas){
        let qtd = Math.floor(num / cedula);

        if(qtd > 0){
            resultado.push({
                cedula: cedula,
                qtd: qtd
            });
            
            num %= cedula;
        }
    }

    res.render("index", {
        resultado
    });
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})