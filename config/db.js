const mysql = require('mysql2/promise')
require('dotenv').config()

// create a connection pool
const pool = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
});

// test the connection
(async () =>{
    try{
        await pool.query('SELECT 1');
        console.log('✅ MySQL Database connected successfully.');
    } catch(err) {
        console.error('❌ Error connecting to MySQL:',err.message);
    }
})()

//export the pool to use in other files
module.exports = pool;