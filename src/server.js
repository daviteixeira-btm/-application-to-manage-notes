/* Arquivo que é o ponto de entrada da aplicação pelo servidor */

// biblioteca para lidar com os erros do servidor e do cliente
require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");

// Importação do AppError para tratamento de exceções
const AppError = require("./utils/AppError");

// Importando todas as funcionalidades do express
const express = require("express");

// Importação do arquivo index com o conjunto de rotas da API
const routes = require("./routes");

migrationsRun();

// Iniciando o express
const app = express();

/* Aqui dizemos para o node que as informações 
que vão vir no corpo da requisição vão ser em formato de json. */
app.use(express.json());

// Aqui usamos as rotas da aplicação.
app.use(routes);

// 
app.use((error, request, response, next) => {

    // Saber se o error foi gerado pelo cliente
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    // Se não for do cliente, é emitido um error padrão do servidor
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    })
});

// Endereço que o express vai atender as requisições
const PORT = 3333;

/* Aqui o express fica observando o endereço e executa a função para 
saber se ele está rodando e em qual porta ele está */
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));