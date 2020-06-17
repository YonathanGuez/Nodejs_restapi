const pg = require('pg');
require('dotenv').config({ path: './.env' });
var fs = require('fs');

try {
  var data = fs.readFileSync('./db/db.sql', 'utf8');
  const connectionString = process.env.DATABASE_URL;
  const client = new pg.Client(connectionString);
  client.connect();
  const query = client.query(data.toString(), (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
    client.end();
  });
} catch (e) {
  console.log('Error:', e.stack);
}