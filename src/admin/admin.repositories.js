import { pool } from "../db.js";
export async function getUsers(){
    try{
        const users = await pool.query('SELECT userid , username, role, monthlybudget FROM users WHERE role = $1', ["user"]);
        return {
            success: true,
            users: true,
            rowCount: users.rowCount,
            rows: users.rows
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function banUser(userid){

    try{
        await pool.query('DELETE FROM expenses WHERE belongs_to = $1', [userid]);
        const ban = await pool.query('DELETE FROM users WHERE userid = $1', [userid]);
    }catch(err){
        console.log(err);
        throw err;
    }
}