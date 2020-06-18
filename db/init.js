const pg = require('pg');
require('dotenv').config({ path: './.env.dev' });
var fs = require('fs');

exports.createBD = async function () {
  try {
    var data = fs.readFileSync('./db/db.sql', 'utf8');
    const connectionString = process.env.DATABASE_URL;
    const userdb = process.env.USER_DB;
    queryString = data.toString().replace(/postgres/gi, userdb);

    console.log(queryString);
    const client = new pg.Client(connectionString);
    client.connect();
    const query = await client.query(data.toString(), (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res);
    });
    await client.end();
  } catch (e) {
    console.log('Error:', e.stack);
  }
};
