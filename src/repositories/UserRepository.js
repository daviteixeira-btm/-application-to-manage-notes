/* Arquivo para separar as responsabilidades dos controllers de buscar informações ou fazer alterações 
no banco de dados, assim deixamos a logica do banco separada */

// Conexão com o banco de dados
const sqliteConnection = require('../database/sqlite');

class UserRepository {

    // Como o banco vai lidar com a busca do usuário pelo email
    async findByEmail(email){
        // faz a conexão com o banco de dados
        const database = await sqliteConnection();

        // Verifica se o email do usuario já existe
        const user = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        return user;
    }

    // Como o banco vai lidar com a criação de um usuário
    async create({ name, email, password }){
        // faz a conexão com o banco de dados
        const database = await sqliteConnection();

        // Insere os dados na tabela do usuário
        const userId = await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
        );

        return { id: userId};
    }
}

module.exports = UserRepository;