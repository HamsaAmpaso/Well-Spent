import { getUsersService } from "./admin.services.js";
import { banUserService } from "./admin.services.js";
export async function getUsersController(req, res, next){
    try{
        const users = await getUsersService();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}
export async function banUserController(req, res, next){
    try{
        const userid = req.params.id;
        const ban = await banUserService(userid);
        res.status(200).json(ban);
    }catch(err){
        next(err);
    }
}
