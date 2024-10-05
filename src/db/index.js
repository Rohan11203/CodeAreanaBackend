const { query, text } = require('express')
const { param } = require('express-validator')
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pern_auth',
  password: 'Rohan@123',
  port: 5432,
})

module.exports = {
  query: (text, params) => pool.query(text,params),
}