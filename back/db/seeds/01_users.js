
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          email: 'marcusames00@gmail.com',
          password: '$2a$10$BQ17U8I1vgB9u92xlQNpzOB83P4odP3IfDau6bkWX9kPK83sMmNkC'
        },
        {
          email: 'chad@johnson.com',
          password: '$2a$10$BQ17U8I1vgB9u92xlQNpzOB83P4odP3IfDau6bkWX9kPK83sMmNkC'
        },
        {
          email: 'susan@smith.com',
          password: '$2a$10$BQ17U8I1vgB9u92xlQNpzOB83P4odP3IfDau6bkWX9kPK83sMmNkC'
        }
      ]);
    });
};
