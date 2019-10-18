const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://Omnistack:omnistack@cluster0-tltml.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query - Acessar query params (para filtros)
// req.params - Acessar route params (para edição/delete)
// req.body - Acessar corpo da requisição (para criação/edição de registros)

//app.use(cors({origin: 'http://localhost:3333'})) //apenas este endereço pode acessar a API
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);

app.listen(3333);