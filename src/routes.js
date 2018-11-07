const express = require("express");

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

/**
 * NOTA_ESTUDO:
 * Basicamente trabalhamos com 4 tipos de requisições:
 * 
 * Método GET quando queremos receber uma requisição.
 * Método POST quando queremos que algum registro seja criado.
 * Método PUT para quando a gente quer atualizar alguma informação.
 * Método DELETE quanto a gente quer apagar alguma informação.
 */

routes.get("/tweets", TweetController.index); 
routes.post("/tweets", TweetController.store);

// NOTA_ESTUDO: Tudo o que vier depois da barra e dois ponto, o express vai considerar como parâmetro chamado "ID"
routes.post('/likes/:id', LikeController.store);

module.exports = routes;