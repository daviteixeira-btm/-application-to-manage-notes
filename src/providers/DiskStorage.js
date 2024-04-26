/* Esse arquivo vai ter duas funções: salvar o arquivo de upload e deletar o arquivo de upload. Desta
forma, sempre que o usuário enviar uma nova foto, antes de salva-la, verificamos se ele já tem uma foto, 
assim deletamos a antiga e substituimos pela nova. Assim não teremos fotos duplicadas para a foto de perfil.*/

// Importação para poder lidar com manipulação de arquivos
const fs = require("fs");

const path = require("path");

const uploadConfig = require("../configs/upload");

class DiskStorage {
    
    async saveFile(file){
        // Mudando o arquivo de pastas
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        )

        return file;
    }

    async deleteFile(file){
        // Pegamos o endereço do arquivo
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try {
            await fs.promises.stat(filePath);
        } catch (error) {
            return;
        }

        // Aqui, deletamos o arquivo
        await fs.promises.unlink(filePath);
    }
}

module.exports = DiskStorage;