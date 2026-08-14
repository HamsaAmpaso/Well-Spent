import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { pool } from './db.js';
import cors from 'cors';
import { centralizedErrorMiddleware } from './centralized-error-middleware.js';
import cookieParser from 'cookie-parser';
import { authRoutes } from './auth/auth.routes.js';
import { userRoutes } from './user/user.routes.js';
import { adminRoutes } from './admin/admin.routes.js';
const app = express();
app.set("trust proxy", 1);
app.use(express.json());
const allowedOrigins = [
  'https://well-spent.hamsaampaso1.workers.dev',
  'http://127.0.0.1:5500', // <-- THIS WAS MISSING
  'http://localhost:5500',
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://localhost:5173'
];

// Configure CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: Origin not allowed'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cookieParser());
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use(centralizedErrorMiddleware);
const PORT = process.env.PORT || 3000;
async function startServer(){
    try{
       await pool.connect();
       app.listen(PORT, ()=>{
         console.log("Well Spent server is running.");
       });
    }catch(err){
       console.log(err);
       process.exit(1);
    }
}
startServer();