// Todas as rotas de tags é de responsabilidade desse arquivo

// Pegamos o 'Router' do express para gerenciar/manipular as rotas de tags
const { Router } = require('express');

// importando o controller de tags
const TagsController = require('../controllers/TagsController');

// Importar o middleware de autenticação
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// Atribuimos o Router a variavel
const tagsRoutes = Router();

// Criando uma nova instância em memoria para a classe
const tagsController = new TagsController();

// redirecionamento do método index para o tagsController
tagsRoutes.get('/', ensureAuthenticated, tagsController.index);

// Expondo as rotas de tags
module.exports = tagsRoutes;