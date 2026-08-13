import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getRefreshToken } from './auth.repositories.js';
import { insertRefreshToken } from './auth.repositories.js';
export async function refreshMidlleware(req, res, next){
    try{
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
             return res.status(401).json({
                success: false,
                noRefreshToken: true,
                refreshTokenNotMatch: false
             });
        }

        const decodedRefreshToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_JWT_SECRET);
        const refreshTokenFromDB = await getRefreshToken(decodedRefreshToken.user);
        const isMatch = await bcrypt.compare(refreshToken, refreshTokenFromDB);

        if(!isMatch){
            return res.status(401).json({
                refreshTokenNotMatch: true,
                success: false,
                noRefreshToken: false
            })
        }

        const payload = {
            user: decodedRefreshToken.user,
            role: decodedRefreshToken.role,
            iss: 'Well Spent'

        };

        const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_JWT_SECRET, {
            expiresIn: "15m"
        });
        const newRefereshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_JWT_SECRET, {
            expiresIn: "30d"
        });
        const hashedNewRefreshToken = await bcrypt.hash(newRefereshToken, 12);

        await insertRefreshToken(hashedNewRefreshToken, decodedRefreshToken.user);

         res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 

        });
        res.cookie("refreshToken", newRefereshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });


        res.status(200).json({
            success: true,
            refreshTokenNotMatch: false,
            noRefreshToken: false
        });
    
    }catch(err){
        res.status(401).json({
            success: false,
            refreshTokenNotMatch: false,
            noRefreshToken: false
        });
    }
}
