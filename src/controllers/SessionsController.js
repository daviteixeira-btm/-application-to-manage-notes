const knex = require("../database/knex");
const AppError = require("../utils/AppError");

const { compare } = require("bcryptjs");

const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

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

        /* Gerar o token para o usuário, para ele usar como uma chave para fazer as requisições
        já cadastradas na aplicação */
        
        const {secret, expiresIn} = authConfig.jwt;

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });



        return response.json({ user, token });
    }
}

module.exports = SessionsController;