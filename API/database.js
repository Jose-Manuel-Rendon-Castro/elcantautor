require('dotenv').config()
const mysql = require('mysql2/promise')


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

module.exports = { pool }

pool.getConnection()
  .then(conn => {
    console.log('✅ Conexión exitosa a MySQL')
    conn.release() // liberar conexión

  })
  .catch(err => {
    console.error('❌ Error de conexión:', err.message)
  })

module.exports = { pool }
