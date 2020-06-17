require('dotenv').config({ path: './.env' });
const express = require('express');
const path = require('path');

const app = express();
// init middleware ==> known what is my request
const logger = (req, res, next) => {
  // console.log(res)
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};
app.use(logger);

// Body parser Middleware we need this for POST end pars the Body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes/api/members.js => router
app.use('/api/users', require('./routes/api/users'));

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'pass!' });
});

// Start server
// app.listen(process.env.PORT, () => {
//     console.log(`Server listening : ` + process.env.PORT);
// });
module.exports = app;
