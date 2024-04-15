const path = require("path");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

// Aqui, criamos a conexão com o banco de dados
async function sqliteConnection(){

    const database = await sqlite.open({
        /* Aqui, colocamos onde o arquivo vai ser salvo, utilizando o 'path' (vem com o Node), 
        para resolver os endereços de acordo com o ambiente do sistema operacional */
        filename: path.resolve(__dirname, "..", "database.db"),
        // Qual o DRIVE de conexão que vai ser utilizado
        driver: sqlite3.Database
    });

    return database;
}

module.exports = sqliteConnection;