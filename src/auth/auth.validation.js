import {z} from 'zod';
export const signupSchema = z.object({
    username: z.string().min(3).max(30).refine(value => !value.includes(" "), {message: "Username cannot contain spaces"}),
    password: z.string().min(8).max(20).regex(/[A-Z]/, "Must Contain a capital letter").regex(/[0-9]/, "Must contain a number")
});
export function validator(schema){
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if(!result.success){
            return res.status(400).json({
               signup: false,
               success: false,
               userAlreadyExists: false,
               accessToken: null,
               refreshToken: null,
               validationError: true,
               login: false,
               forErrorBox: false,
               addExpense: false,
               
            });
        }
        next();
    }
}