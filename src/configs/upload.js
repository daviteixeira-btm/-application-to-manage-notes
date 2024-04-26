// Configurações para o upload de imagens

const path = require("path");

const multer = require("multer");

const crypto = require("crypto");

// Uma pasta temporaria, onde a imagem chega
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");

// Uma pasta onde os arquivos vão ficar
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

// Biblioteca para fazer o upload de arquivos
const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback){
            // Gerar um hash aleatorio para o nome do arquivo, para evitar arquivos com nomes iguais.
            const fileHash = crypto.randomBytes(10).toString("hex");
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER
}