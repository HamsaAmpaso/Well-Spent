import { getUsers } from "./admin.repositories.js";
import { banUser } from "./admin.repositories.js";
export async function getUsersService(){
    try{
        const users = await getUsers();
        return users;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function  banUserService(userid){
    try{
        await banUser(userid);
        return {
            success: true,
            ban: true
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}