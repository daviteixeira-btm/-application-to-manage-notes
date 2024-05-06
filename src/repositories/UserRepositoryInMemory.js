/* Com a criação do UserRepositoryInMemory armazenamos as informações em memoria para que  possamos fazer
o teste independente do banco de dados, para não puluir-lo, deixando o teste mais rápido, utilizando assim a 
inverção de dependencia */

class UserRepositoryInMemory {
    users = [];

    async create({ name, email, password }){
        const user = {
            // Geramos um id aleatório
            id: Math.floor(Math.random() * 1000) + 1,
            name,
            email,
            password
        };

        this.users.push(user);
        
        return user;
    };

    async findByEmail(email){
        return this.users.find(user => user.email === email);
    }
}

module.exports = UserRepositoryInMemory;