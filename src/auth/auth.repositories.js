import { pool } from "../db.js";
export async function signupRepository(username, password){
    try{
        const user = await pool.query('INSERT INTO users (username, password) VALUES ( $1, $2 ) RETURNING *', [username, password]);
        return{
            rowCount: user.rowCount,
            rows: user.rows
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function getUserByUsernameRepository(username) {
    return pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
    );
}
export async function insertRefreshToken(refreshToken, userid){
    try{
        await pool.query('UPDATE users SET refreshtoken = $1 WHERE userid = $2', [refreshToken, userid]);
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function loginRepository(username){
    try{
        const user_password = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        return {
            rowCount: user_password.rowCount,
            rows: user_password.rows
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function logoutRepository(userid){
    try{
        await pool.query('UPDATE users SET refreshtoken = NULL WHERE userid = $1', [userid]);
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function getRefreshToken(userid){
    try{
        const refreshToken = await pool.query('SELECT refreshtoken FROM users WHERE userid = $1', [userid]);
        return refreshToken.rows[0].refreshtoken;
    }catch(err){
        console.log(err);
        throw err;
    }
}
