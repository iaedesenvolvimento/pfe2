const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// 1. Configurar conexão com MySQL Workbench
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Seu usuário do Workbench
    password: 'ITB@123456', // Sua senha do Workbench
    database: 'SistemaLogin'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL Workbench!');
});

// 2. Rota para servir o formulário HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. Rota para receber os dados do Cadastro
app.post('/cadastrar', (req, res) => {
    const { nome, email, senha } = req.body;
    
    const query = "INSERT INTO Usuarios (nome, email, senha) VALUES (?, ?, ?)";
    
    db.query(query, [nome, email, senha], (err, result) => {
        if (err) {
            return res.send("Erro ao cadastrar: " + err.message);
        }
        res.send("Usuário cadastrado com sucesso no MySQL!");
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
