const knex = require("../database/knex");

class NotesController {

    // Função para criação de uma nota
    async create(request, response){

        // É possivel pegar essas informações a partir do envio no corpo da requisição
        const { title, description, tags, links } = request.body;

        const { user_id } = request.params;

        // Aqui inserimos a nota
        const [note_id] = await knex("notes").insert({
            title,
            description,
            user_id
        });

        /* Aqui criamos um novo objeto, percorrendo cada link e retornando 
        o note_id que o link está vinculado e mudando de link para url */
        const linksInsert = links.map(link => {
            return {
                note_id,
                url: link
            }
        });

        // Aqui inserimos os links no banco de dados
        await knex("links").insert(linksInsert);

        /* Aqui criamos um novo objeto, percorrendo cada tag e retornando 
        o note_id que a tag está vinculada, buscando pelo nome dela */        
        const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        });

        // Aqui inserimos as tags no banco de dados
        await knex("tags").insert(tagsInsert);

        // Devolve as informações em formato de json
        response.json();
    }

    // Função para exibir uma nota
    async show(request, response){
        
        // Desestruturação do 'id' atravez dos parametros da url por meio do request. 
        const { id } = request.params;

        // Buscamos a nota baseada no id
        const note = await knex("notes").where({ id }).first();
        // Buscamos as tags relacionadas a nota em ordem alfabetica
        const tags = await knex("tags").where({ note_id: id }).orderBy("name");
        // Buscamos os links relacionados a nota em ordem de criação
        const links = await knex("links").where({ note_id: id }).orderBy("created_at");

        // Criamos um novo objeto, despejando todos os detalhes da nota, as tags e os links da mesma
        return response.json({
            ...note,
            tags,
            links
        });
    }

    // Função para deletar uma nota
    async delete(request, response){

        // Recupera o id pelos parametros
        const { id } = request.params;

        // Deleta a nota pelo id
        await knex("notes").where({ id }).delete();

        return response.json();
    }

    // Função para listar todas as rotas cadastradas
    async index(request, response){

        // Valores desestruturados obtidos atravez da query params, por meio do request.
        const { title, user_id, tags } = request.query;

        let notes;

        // Se existe a tag, filtramos pela tags
        if(tags){

            // Aqui convertemos um texto simples em um vetor, interessando somente a tag
            const filterTags = tags.split(",").map(tag => tag.trim());

            /* Retorna as notas que foram criadas apenas para o mesmo usuário, em ordem alfabetica*/
            notes = await knex("tags")
            /* Aqui eu passo um array com quais campos quero selecionar de ambas as tabelas, 
            atravez do nome_da_tabeka.campo_da_tabela */
            .select([
                "notes.id",
                "notes.title",
                "notes.user_id",
            ])
            // Filtramos as tags baseadas no id do usuário
            .where("notes.user_id", user_id)
            /* Ajuda a buscar valores que contem dentro de uma string, 
            verificando tanto o antes e o depois do valor por meio do simbolo de '%' */
            .whereLike("notes.title", `%${title}%`)
            // Aqui realizamos a pesquisa baseada na tag
            .whereIn("name", filterTags)
            // Aqui conectamos as tabelas de tags e motas pelos ids
            .innerJoin("notes", "notes.id", "tags.note_id")
            // Ordenamos as notas pelo titulo
            .orderBy("notes.title");

        } else {
            notes = await knex("notes")
            .where({ user_id })
            .whereLike("title", `%${title}%`)
            .orderBy("title");
        }

        // Aqui pegamos todas as tags do usuário
        const userTags = await knex("tags").where({ user_id });

        // Aqui pecorremos todas as notas e filtramos todas as tags que estejam vinculadas pelo id da nota 
        const notesWithTags = notes.map(note => {
            const noteTags = userTags.filter(tag => tag.note_id === note.id);

            return {
                ...note, // todos os detalhes da nota
                tags: noteTags
            }
        })

        return response.json(notesWithTags);
    }
};

module.exports = NotesController;