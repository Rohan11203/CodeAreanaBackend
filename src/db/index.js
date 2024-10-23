const { query, text } = require('express')
const { param } = require('express-validator')
const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pern_auth',
  password: "Rohan@123",
  port: 5432,
})

// module.exports = {
//   query: (text, params) => pool.query(text,params),
// }


module.exports = {
  query: async (text, params) => {
    try {
      console.log("Query text:", text);
      console.log("Query params:", params);
      
      const result = await pool.query(text, params);
      console.log("Query result:", result);
      
      return result;
    } catch (err) {
      console.error('Database query error1:', err.stack);  // Log the complete error stack
      throw err;  // Re-throw the error for the higher-level catch to handle it
    }
  },
};
