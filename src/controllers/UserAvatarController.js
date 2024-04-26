const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
    
    async update(request, response){

        const user_id = request.user.id;
        const avatarFilename = request.file.filename;

        const diskStorage = new DiskStorage();

        // Buscar os dados do usuário para atualizar o avatar do mesmo
        const user = await knex("users").where({ id: user_id }).first();

        if(!user){
            throw new AppError("Somente usuários autenticados podem mudar o avatar", 401);
        }

        // Verificar se dentro do user existe um avatar
        if(user.avatar){
            // Pegamos a foto antiga e deletamos ela
            await diskStorage.deleteFile(user.avatar);
        }

        // Usamos para salvar o novo avatar
        const filename = await diskStorage.saveFile(avatarFilename);
        user.avatar = filename;

        // Aqui atualizamos o usuário expecifico no banco de dados
        await knex("users").update(user).where({ id: user_id });

        return response.json(user);
    }
}

module.exports = UserAvatarController;