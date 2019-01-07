
exports.up = function(knex, Promise) {
  return knex.schema.createTable("activities", (table) => {
    table.increments();
    table.integer("trip_id")
      .references('id')
      .inTable('trips')
      .notNullable()
      .onDelete('CASCADE');
    table.string('title');
    table.string('type');
    table.date('start');
    table.date('end').defaultTo(null);
    table.string('address').defaultTo(null);
    table.integer('price').defaultTo(0);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("activities");
};
