import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Resend } from 'resend';
import { signupRepository } from './auth.repositories.js';
import { getUserByUsernameRepository } from './auth.repositories.js';
import { insertRefreshToken } from './auth.repositories.js';
import { loginRepository } from './auth.repositories.js';
import { logoutRepository } from './auth.repositories.js';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function signupService(username, password){
    try{
       const result = await getUserByUsernameRepository(username);

       if (result.rows.length > 0) {
          return {
            signup: false,
            success: false,
            userAlreadyExists: true,
            accessToken: null,
            refreshToken: null,
            validationError: false
          };
       }

       const hashedPassword = await bcrypt.hash(password, 12);
       const user = await signupRepository(username, hashedPassword);
       
       const payload = {
          user: user.rows[0].userid,
          role: user.rows[0].role,
          iss: 'Well Spent'
       }

       
       const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_JWT_SECRET, {
        expiresIn: '30d'
       });
       const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);
       const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_JWT_SECRET, {
        expiresIn: "15m"
       });

       await insertRefreshToken(hashedRefreshToken, user.rows[0].userid);
       const {data, error} = await resend.emails.send({
        from: "onboarding@resend.dev",
        to:[username],
        subject: "Well Spent Account Registration",
        text: `Hello ${username} you have successfully created your well spent account thankyou!`
       });

        return {
            signup: true,
            success: true,
            userAlreadyExists: false,
            accessToken: accessToken,
            refreshToken: refreshToken,
            validationError: false,
            role: user.rows[0].role
        };


       
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function loginService(username, password){
    try{
        const user = await loginRepository(username);
        if(user.rowCount === 0){
            return{
               login: false,
               success: false,
               userDoesNotExists: true,
               accessToken: null,
               refreshToken: null,
               validationError: false,
               wrongPassword: false
            }
        }
        const isMatch = await bcrypt.compare(password, user.rows[0].password);

        if(!isMatch){
           return{
               login: false,
               success: false,
               userDoesNotExists: false,
               accessToken: null,
               refreshToken: null,
               validationError: false,
               wrongPassword: true
            }
        }

        const payload = {
            user: user.rows[0].userid,
            role: user.rows[0].role,
            iss: 'Well Spent'
        }

        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_JWT_SECRET, {
            expiresIn: "15m"
        });

        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_JWT_SECRET, {
            expiresIn: "30d"
        });

        const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);
        
        await insertRefreshToken(hashedRefreshToken, user.rows[0].userid);

        return{
               login: true,
               success: true,
               userDoesNotExists: false,
               accessToken: accessToken,
               refreshToken: refreshToken,
               validationError: false,
               wrongPassword: false,
               role: user.rows[0].role
        }

    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function logoutService(refreshToken){
    try{
       const isMatch = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_JWT_SECRET);
       if(!isMatch){
           return {
             success: false,
             logout: false
            }
       }
       const userid = isMatch.user;
       await logoutRepository(userid);
       return {
        success: true,
        logout: true
       }
        
    }catch(err){
       console.log(err);
       throw err;
    }
}