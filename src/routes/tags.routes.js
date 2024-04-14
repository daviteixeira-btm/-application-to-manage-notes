// Todas as rotas de tags é de responsabilidade desse arquivo

// Pegamos o 'Router' do express para gerenciar/manipular as rotas de tags
const { Router } = require('express');

// importando o controller de tags
const TagsController = require('../controllers/TagsController');

// Atribuimos o Router a variavel
const tagsRoutes = Router();

// Criando uma nova instância em memoria para a classe
const tagsController = new TagsController();

// redirecionamento do método index para o tagsController
tagsRoutes.get('/:user_id', tagsController.index);

// Expondo as rotas de tags
module.exports = tagsRoutes;