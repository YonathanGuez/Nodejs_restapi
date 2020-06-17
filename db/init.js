const config = require('../config');

const db = require('knex')({
  client: 'pg',
  connection: {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
  },
});

console.log(`Creating tables ...`);

db.schema
  .hasTable('users')
  .then((exists) => {
    if (!exists) {
      //company, email, creation_date, last_payment, password, url,rules
      console.log(`Creating table 'users'`);
      return db.schema.createTable('users', (table) => {
        table.increments();
        table.string('company').notNullable();
        table.string('email').notNullable();
        table.date('last_payment').nullable();
        table.string('password').notNullable();
        table.string('url').nullable();
        table.string('rule').nullable();
        table.timestamps(true, true);
      });
    }
  })
  .then(() => {
    console.log(`Tables created succesfully`);
    process.exit(0);
  })
  .catch((err) => {
    console.log(`Unable to init tables : ${err}`);
    process.exit(1);
  });
