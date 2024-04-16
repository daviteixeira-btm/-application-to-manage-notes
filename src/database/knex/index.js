/* Neste arquivo, usamos as configurações do knex para que ele 
possa se conectar com o banco de dados */

// Aqui recebemos as configurações
const config = require("../../../knexfile");

// Aqui importamos o knex
const knex = require("knex");

// Aqui criamos a conexão do tipo knex com as configurações de desenvolvimento
const connection = knex(config.development);

// Aqui exportamos a configuração para ser usada em outros lugares da aplicação
module.exports = connection;