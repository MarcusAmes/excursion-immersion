
exports.up = function(knex, Promise) {
  return knex.schema.createTable("activity_notes", (table) => {
    table.increments();
    table.integer("activity_id")
      .references('id')
      .inTable('activities')
      .notNullable()
      .onDelete('CASCADE');
    table.text('note');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("activity_notes");
};
