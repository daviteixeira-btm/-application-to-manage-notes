/* Esse é o arquivo de configuração do knex, você pode 
gerar ele executando o camando 'npx knex init' no terminal */

const path = require("path");

module.exports = {
  // Propriedades de conexação com o banco de dados
  development: {
    // Aqui informamos qual o banco de dados
    client: 'sqlite3',
    connection: {
      //Aqui dizemos em que lugar está o arquivo de banco de dados
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    /* Funcionalidade que vai ser executada no momenta da conexão com o banco de dados,
    para habilitar a funcionalidade de deleção em cascada. */
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    // Aqui, implementamos a estrategia de migrations para automatizar a criação de tabelas na aplicação
    migrations: {
      // Aqui mostramos o caminho da pasta migrations
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    // Padrão para o SQLite
    useNullAsDefault: true
  },
};
