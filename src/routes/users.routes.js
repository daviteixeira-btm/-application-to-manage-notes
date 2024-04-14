// Todas as rotas de usuário é de responsabilidade desse arquivo

// Pegamos o 'Router' do express para gerenciar/manipular as rotas de usuário
const { Router } = require('express');

// Importando o controller de usuário
const UsersController = require('../controllers/UsersController');

// Atribuimos o Router a variavel
const usersRoutes = Router();

// Criando uma nova instância em memoria para a classe
const usersController = new UsersController();

// redirecionamento do método create para o usersController
usersRoutes.post('/', usersController.create);

/* a gente consegue passar um determinado valor/informação como 
parametro, por meio dos dois pontos no endereço da rota, neste caso o 'id'. 
Os route params são obrigatorios, diferentes dos query params. */
usersRoutes.put('/:id', usersController.update);

// Expondo as rotas do usuário
module.exports = usersRoutes;