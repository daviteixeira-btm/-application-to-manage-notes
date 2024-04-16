exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name").notNullable(); // Função para dizer que não é permitido nulo.
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); // A função onDelete, delata os id que estão vinculados em cascada.
    table.integer("user_id").references("id").inTable("users");
});


exports.down  = knex => knex.schemas.dropTable("tags");