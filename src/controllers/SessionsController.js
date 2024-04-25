const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class SessionsController {

    // Função para criar uma seção
    async create(request, response) {
        const { email, password } = request.body;

        // Buscando um usuário pelo email

        // O 'first' garante que traga só um usuário com esse email.
        const user = await knex("users").where({ email }).first();

        if(!user){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        return response.json(user);
    }
}

module.exports = SessionsController;