// Nessa arquivo usamos a síntese do knex para criar as tabelas

// O método UP é responsavel por criar ou alterar algo no banco de dados.
exports.up = knex => knex.schema.createTable("notes", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("user_id").references("id").inTable("users"); // esse campo faz referencia ao id do campo usuario
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

/* O método DOWN é responsavel pelo rollback. Ou seja, desazer alterações 
realizadas pela migration */
exports.down  = knex => knex.schemas.dropTable("notes");