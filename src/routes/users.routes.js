// Todas as rotas de usuário é de responsabilidade desse arquivo

// Pegamos o 'Router' do express para gerenciar/manipular as rotas de usuário
const { Router } = require('express');

// Usamos para carregar a imagem
const multer = require("multer");

// Importamos as configurações de upload
const uploadConfig = require("../configs/upload");

// Importando o controller de usuário
const UsersController = require('../controllers/UsersController');

// Atribuimos o Router a variavel
const usersRoutes = Router();

// Inicializando o MULTER na variavel
const upload = multer(uploadConfig.MULTER);

// Criando uma nova instância em memoria para a classe
const usersController = new UsersController();

// Importar o middleware de autenticação
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// redirecionamento do método create para o usersController
usersRoutes.post('/', usersController.create);

/* a gente consegue passar um determinado valor/informação como 
parametro, por meio dos dois pontos no endereço da rota, neste caso o 'id'. 
Os route params são obrigatorios, diferentes dos query params. */

// O usuário precisa estar autenticado pelo seu id atravez do token para acessar a rota de update
usersRoutes.put('/', ensureAuthenticated, usersController.update);

// Aqui vai ser a rota para acessar onde será armazenados os aquivos de imagem

// o single() é para carregar apenas um arquivo pelo nome do campo
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
    console.log(request.file.filename);
    response.json();
});

// Expondo as rotas do usuário
module.exports = usersRoutes;