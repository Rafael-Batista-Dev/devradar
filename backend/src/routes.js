const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");
const routes = Router();

//Rota de Listagem
routes.get("/devs", DevController.index);
//Rora de Criação
routes.post("/devs", DevController.store);
//Rota de busca
routes.get("/search", SearchController.index);

module.exports = routes;
