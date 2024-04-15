// Importação da conexão com o banco de dados
const sqliteConnection = require("../../sqlite");

// Importação da migration 'createUsers'
const createUsers = require("./createUsers");

// Função para executar a migration 
async function migrationsRun(){
    // Schemas se refere as tabelas que o banco vai ter
    const schemas = [
        createUsers
    ].join(''); // Juntar todas as migrations

    // executa a conexão com o banco de dados
    sqliteConnection()
    .then(db => db.exec(schemas)) // execução das migrations
    .catch(error => console.error(error)); // tratamento do erro
}

// exportação da migration
module.exports = migrationsRun;