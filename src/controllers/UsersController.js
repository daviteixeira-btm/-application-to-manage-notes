/* O Controller é a camada responsavel por processar as requisições da aplicação. 
É no controller que temos as regras de négocio responsavel por executar as solicitações 
do usuário. */

/* Importação do 'hash' que é a função que vai gerar a criptografia */
const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError');

// Importando da logica de usuarios do banco
const UserRepository = require("../repositories/UserRepository");

// Importamos nosso serviço de criação de usuário
const UserCreateService = require("../services/UserCreateService");

// Conexão com o banco de dados
const sqliteConnection = require('../database/sqlite');

/* Usamos a estrutura de classe para criar um controller pois ela permite criar várias  funções 
seguindo o padrão de ter no máximo cinco métodos/funções */
class UsersController {
  
  /**
   * index - GET para listar vários registros;
   * show - GET para exibir um registro especifico;
   * create - POST para criar um registro;
   * update - PUT para atualizar um registro;
   * delete - DELETE para remover um registro.
   * 
   * Se precisar criar mais que cinco métodos, crie um controller semparado.
   */

  // funcionalidade que cria um usuário
  async create(request, response) {

    const { name, email, password } = request.body;

    const userRepository = new UserRepository();

    // Passamos o userRepository para a classe
    const userCreateService = new UserCreateService(userRepository);

    await userCreateService.execute({ name, email, password });

    // Exemplo onde além do retorno de resposta em json, é retornado o status code de 201 para criação.
    return response.status(201).json();
  };

  async update(request, response) {

     const { name, email, password, old_password } = request.body;
     const user_id = request.user.id;

     const database = await sqliteConnection();
     const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

     if(!user) {
      throw new AppError("Usuário não encontrado");
     }

     const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

     if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.");
     }

     user.name = name ?? user.name;
     user.email= email ?? user.email;

     if(password && !old_password) {
      throw new AppError("Você informar a senha antiga para definir a nova senha");
     }

     if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      user.password = await hash(password, 8);
     }

     await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`, 
      [user.name, user.email, user.password, user_id]
    );

    return response.status(200).json();
  }
}

module.exports = UsersController;