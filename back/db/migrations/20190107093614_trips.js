
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trips", (table) => {
    table.increments();
    table.integer("user_id")
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.string('name');
    table.string('destination');
    table.integer('budget')
    .defaultTo(null);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trips");
};
