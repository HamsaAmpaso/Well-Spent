import { signupService } from "./auth.services.js";
import { loginService } from "./auth.services.js";
import { logoutService } from "./auth.services.js";

// Add this helper to your controller file:
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

export async function signupController(req, res ,next){
    try{
        const username = req.body.username;
        const password = req.body.password;
        const registering = await signupService(username, password);

        if (!registering.signup) {
             return res.status(400).json(registering);
        }
        res.cookie("accessToken", registering.accessToken, getDynamicCookieOptions(req));
        res.cookie("refreshToken", registering.refreshToken, getDynamicCookieOptions(req));
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
        res.cookie("accessToken", loggingin.accessToken, getDynamicCookieOptions(req));
        res.cookie("refreshToken", loggingin.refreshToken, getDynamicCookieOptions(req));

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
        res.clearCookie("accessToken", getDynamicCookieOptions(req));
        res.clearCookie("refreshToken", getDynamicCookieOptions(req));
        res.status(200).json(logouting);

    }catch(err){
        next(err);
    }
}
