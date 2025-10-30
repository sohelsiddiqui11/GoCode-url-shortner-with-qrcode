const db = require('../config/db'); //import your database connection pool

const saveUrl = async(longUrl,shortCode)=>{
    const sql = 'INSERT INTO urls (long_url,short_code) VALUES (?,?)';

    try{
        // execute the query
        await db.query(sql,[longUrl,shortCode]);
    } catch(err){
        console.error('Database save error:',err.message);
        // re throw the error caught by the controller
        throw new Error('Failed to save URL to database.');
    }
};

const getLongUrl = async(shortCode)=>{
    const sql = 'SELECT long_url FROM urls WHERE short_code = ?';

    try{
        //execute the query
        const[rows] = await db.query(sql,[shortCode]);

        // check if we found a row
        if(rows.length>0){
            return rows[0].long_url;
        } else{
            return null;
        }
    } catch (err) {
        console.error('Database get error:', err.message);
        // Re-throw the error to be caught by the controller
        throw new Error('Failed to get URL from database.');
      }
};

module.exports = {saveUrl,getLongUrl};