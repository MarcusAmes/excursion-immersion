
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trip_notes", (table) => {
    table.increments();
    table.integer("trip_id")
      .references('id')
      .inTable('trips')
      .notNullable()
      .onDelete('CASCADE');
    table.text('note');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trip_notes");
};
