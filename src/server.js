import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { pool } from './db.js';
import cors from 'cors';
import { centralizedErrorMiddleware } from './centralized-error-middleware.js';
import cookieParser from 'cookie-parser';
import { authRoutes } from './auth/auth.routes.js';
import { userRoutes } from './user/user.routes.js';
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}));
app.use(cookieParser());
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use(centralizedErrorMiddleware);
async function startServer(){
    try{
       await pool.connect();
       app.listen(3000, ()=>{
         console.log("Well Spent server is running.");
       });
    }catch(err){
       console.log(err);
       process.exit(1);
    }
}
startServer();