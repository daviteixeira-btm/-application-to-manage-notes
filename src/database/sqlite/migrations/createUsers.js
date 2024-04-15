/* Uma Migration serve para automatizar a criação de uma tabela 
dentro do banco de dados */

const createUsers = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR,
        email VARCHAR,
        password VARCHAR,
        avatar VARCHAR NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

module.exports = createUsers;