import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const {Pool} = pg;
export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
    /*host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE*/

});

async function testDB(){
    try{
        const test = await pool.query('SELECT * FROM users');
        console.log(test);
    }catch(err){
        console.log(err);
    }
}
