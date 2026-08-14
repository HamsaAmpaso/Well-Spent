import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const {Pool} = pg;
export const pool = new Pool({
        
        connectionString: process.env.DATABASE_URL

});

async function testDB(){
    try{
        const test = await pool.query('SELECT * FROM users');
        console.log(test);
    }catch(err){
        console.log(err);
    }
}
