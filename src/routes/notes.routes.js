// Todas as rotas de notas é de responsabilidade desse arquivo

// Pegamos o 'Router' do express para gerenciar/manipular as rotas de notas
const { Router } = require('express');

// importando o controller de notas
const NotesController = require('../controllers/NotesController');

// Importar o middleware de autenticação
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// Atribuimos o Router a variavel
const notesRoutes = Router();

// Criando uma nova instância em memoria para a classe
const notesController = new NotesController();

// Usar o middleware de autenticação para todas as rotas
notesRoutes.use(ensureAuthenticated);

// redirecionamento dos métodos para o notesController
notesRoutes.get('/', notesController.index);
notesRoutes.post('/', notesController.create);
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete);

// Expondo as rotas de notas
module.exports = notesRoutes;