const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://rafa:qwe123@cluster0-oj5wi.mongodb.net/dbconectdev?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);
//Método HTTP: GET, POST, PUT, DELETE
/*
GET    = RETORNA UM VALOR
POST   = ADICIONA UM VALOR
PUT    = ATUALIZA UM VALOR
DELETE = UM VALOR
*/

//Tipo de parâmetros
//Query Params: req.query(FIltros, ordenação, paginação, ...)
//Route Params: Manipula um valor usando o PUT OU DELETE
//Bady: request.body(Dados para criação oualteração de um registro)

server.listen(3333, () => {
  console.log("Server Online!");
});
