const express = require('express')

const router = express.Router()

// Api connection DB
const db = require('../../db')

router.post('/createuser', async (req, res, next) => {
  try {
    const { company, email, last_payment, password, url } = req.body

    const query = `
  INSERT INTO users(company, email, 
    creation_date, last_payment, password, url) 
  VALUES (('${company}') , ('${email}'), Now(),Now(),('${password}'),('${url}'))
  `
    console.log(query)
    const { result } = await db.query(query)
    res.send(result)
  } catch (error) {
    next(error)
  }
})
module.exports = router
