require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const Connection = require('./connection/connection');

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Connection(db_url, db_user, db_pass, db_data);

const rotasTodolist = require('./routers/app.rotas.js');
app.use('/todolist', rotasTodolist);

const port = 4000;
app.listen(process.env.PORT || port, () => {
    console.log(`O servidor da aplicação está rodando em: http://localhost:${port}`);
});