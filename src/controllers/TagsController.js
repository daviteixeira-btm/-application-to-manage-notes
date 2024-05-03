const knex = require("../database/knex");

class TagsController {
    // Função para listar todas as tags cadastradas do usuário
    async index(request, response){

        const user_id  = request.user.id;

        // Buscar as tags na tabela de tags pelo user_id
        const tags = await knex("tags")
        .where({ user_id })
        .groupBy("name");

        return response.json(tags);
    }
}

module.exports = TagsController;