import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getRefreshToken } from './auth.repositories.js';
import { insertRefreshToken } from './auth.repositories.js';
const getDynamicCookieOptions = (req) => {
    const origin = req.headers.origin || "";
    
    // Check if the request is coming from your local machine
    const isLocal = origin.includes("localhost") || origin.includes("127.0.0.1") || req.hostname === "localhost" || req.hostname === "127.0.0.1";

    return {
        httpOnly: true,
        // Local (http) = false, Cloudflare (https) = true
        secure: !isLocal,
        // Local (http) = 'lax', Cloudflare (https) = 'none'
        sameSite: isLocal ? "lax" : "none",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    };
};
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

         res.cookie("accessToken", newAccessToken, getDynamicCookieOptions(req));
        res.cookie("refreshToken", newRefereshToken, getDynamicCookieOptions(req));


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
