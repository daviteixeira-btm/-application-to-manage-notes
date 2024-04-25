const knex = require("../database/knex");
const AppError = require("../utils/AppError");

const { compare } = require("bcryptjs");

class SessionsController {

    // Função para criar uma seção
    async create(request, response) {
        const { email, password } = request.body;

        // Validação de o usuário existe 
        // Buscando um usuário pelo email

        // O 'first' garante que traga só um usuário com esse email.
        const user = await knex("users").where({ email }).first();

        if(!user){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        // Validação se a senha está correta
        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        return response.json(user);
    }
}

module.exports = SessionsController;