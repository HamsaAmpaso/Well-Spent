import { signupService } from "./auth.services.js";
import { loginService } from "./auth.services.js";
import { logoutService } from "./auth.services.js";
export async function signupController(req, res ,next){
    try{
        const username = req.body.username;
        const password = req.body.password;
        const registering = await signupService(username, password);

        if (!registering.signup) {
             return res.status(400).json(registering);
        }
        res.cookie("accessToken", registering.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 

        });
        res.cookie("refreshToken", registering.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });
        const registering2 = {
            signup: registering.signup,
            success: registering.success,
            userAlreadyExists: registering.userAlreadyExists,
            validationError: registering.validationError,
            role: registering.role
        }
        res.status(201).json(registering2);
    }catch(err){
        next(err);
    }
}

export async function loginController(req, res, next){
    try{
        const username = req.body.username;
        const password = req.body.password;
        const loggingin = await loginService(username, password);
        if(!loggingin.login){
            return res.status(400).json(loggingin);
        }
        res.cookie("accessToken", loggingin.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 

        });
        res.cookie("refreshToken", loggingin.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });

        const loggingin2 = {
            login: loggingin.login,
            success: loggingin.success,
            userDoesNotExists: loggingin.userDoesNotExists,
            validationError: loggingin.validationError,
            wrongPassword: loggingin.wrongPassword,
            role: loggingin.role
        }
        res.status(200).json(loggingin2);

    }catch(err){
        next(err);
    }
}
export async function logoutController(req, res, next){
    try{
        const refreshToken = req.cookies.refreshToken;
        const logouting = await logoutService(refreshToken);
        if(!logouting.success && !logouting.logout){
            return res.status(400).json(logouting);
        }
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.status(200).json(logouting);

    }catch(err){
        next(err);
    }
}
