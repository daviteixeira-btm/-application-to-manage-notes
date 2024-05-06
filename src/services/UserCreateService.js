/* Importação do 'hash' que é a função que vai gerar a criptografia */
const { hash } = require('bcryptjs')
const AppError = require('../utils/AppError');

class UserCreateService {

    /* Metódo constructor é executado no momento que a classe é instanciada, assim compartilhamos o useRepository 
    com todas as funções da classe utilizando assim a  Inversão de Dependência */
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute({ name, email, password }){

        // Verifica se o email do usuario já existe
        const checkUserExists = await this.userRepository.findByEmail(email);

        if (checkUserExists){
            // Excessão caso o usuário exista
            throw new AppError("Este e-mail já está em uso.");
        }

        // Aqui, na função passamos a senha e o salto, que é o fator de complexidade da senha
        const hashedPassword = await hash(password, 8);

        // Insere os dados na tabela do usuário
        const userCreated = await this.userRepository.create({ name, email, password: hashedPassword});

        return userCreated;
    }
}

module.exports = UserCreateService;