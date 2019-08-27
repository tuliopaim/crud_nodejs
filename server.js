const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());
 
//liberar acesso pra qualquer um
//app.use(cors()); 

//iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models/');

//rotas
app.use('/api', require("./src/routes"));

app.listen(3001);

