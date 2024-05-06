const UserCreateService = require("./UserCreateService");

// Importação do repositorio de teste
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

it('user should be create', async () => {
    // Dados de exemplo para a requisição de criação de um usuário
    const user = {
        name: "User Test",
        email: "user@test.com",
        password: "123"
    };

    /* Temos que conseguir executar os testes de forma independente da 
    infraestrutura da nossa aplicação: do banco de dados, sem depender de serviços, 
    de API's ou qualquer ambiente externo, para não polui-los*/
    const userRepositoryInMemory = new UserRepositoryInMemory();

    const userCreateService = new UserCreateService(userRepositoryInMemory);

    const userCreated = await userCreateService.execute(user);

    // É esperado que o usuário tenha um id
    expect(userCreated).toHaveProperty("id");
});