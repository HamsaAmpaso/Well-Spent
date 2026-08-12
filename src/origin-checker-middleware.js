import dotenv from 'dotenv';
dotenv.config();
export function checkOrigin(req, res ,next){
     const origin = req.headers.origin;
     if(origin !== process.env.ALLOWED_ORIGIN){
        return res.status(403).json({
            success: false,
            message: "Invalid origin"
        });
     }
     next();
}