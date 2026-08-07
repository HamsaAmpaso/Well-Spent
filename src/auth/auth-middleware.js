import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
export  function authenticationMiddleware (req, res, next){
   try{
      const accessToken = req.cookies.accessToken;
      if(!accessToken){
        return res.status(401).json({
            success: false,
            addExpense: false,
            noAccessToken: true,
            invalidToken: false,
            tokenExpired: false,
            validationError: false
        });
      }

      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_JWT_SECRET);
      req.user = decoded;
      next();
   }catch(err){
      console.log(err);
      if(err.name === "TokenExpiredError"){
         return res.status(401).json({
            success: false,
            addExpense: false,
            noAccessToken: false,
            invalidToken: false,
            tokenExpired: true,
            validationError: false
        });
      }
       return res.status(401).json({
            success: false,
            addExpense: false,
            noAccessToken: false,
            invalidToken: true,
            tokenExpired: false,
            validationError: false
        });
   }
}