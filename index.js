const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Bem vindo!</h1>
        <p>rota 1</p>
       
    `);
});

app.get('/rota2', (req, res) => {
    res.send(`
        <h1>rota 2</h1>
        <p>PARAMETRO</p>
    `);
});

app.get('/rota3', (req, res) => {
    res.send(`
        <h1>rota 3</h1>
        <p>PARAMETRO</p>
    `);
});

app.listen(PORT, () => {
    console.log("Servidor iniciado.");
});