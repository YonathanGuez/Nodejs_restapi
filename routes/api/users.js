const express = require('express');
const router = express.Router();

// Api connection DB

const db = require('../../db');
// http://localhost:3000/api/users/createuser
router.post('/createuser', async (req, res, next) => {
  try {
    const { company, email, last_payment, password, url } = req.body;
    payment = '';
    if (last_payment === '') {
      payment = 'NULL';
    } else {
      payment = `('${last_payment}')`;
    }
    const query = `
  INSERT INTO users(company, email, 
   last_payment, password, url,rules) 
  VALUES (('${company}') , ('${email}'), ${payment},('${password}'),('${url}'),1)
  `;
    console.log(query);
    const result = await db.query(query);
    res.status(201).json({ status: 'success', message: 'user created' });
    await console.log('DONE : ' + result.command);
  } catch (error) {
    next(error);
  }
});
//http://localhost:3000/api/users/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const query = `
      SELECT id,company
      FROM users
      WHERE email='${email}' and password='${password}'
    `;
    const { rows: result } = await db.query(query);
    console.log('DONE : ' + result[0].id + ' and ' + result[0].company);
    if (result.length == 0) {
      feed = { id: 0, company: 'NULL', error: '1' };
      result.push(feed);
      res.send(result[0]);
    } else {
      result[0].error = '0';
      res.send(result[0]);
    }
  } catch (error) {
    next(error);
  }
});

// UPDATE payment
router.post('/updatepayment', async (req, res, next) => {
  try {
    const { id } = req.body;
    const query = `UPDATE users set last_payment=Now()  where id = ${id}`;
    const result = await db.query(query);
    await console.log('DONE : ' + result.command);
    res
      .status(201)
      .json({ status: 'success', message: 'update payment', id: id });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
