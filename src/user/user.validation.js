import {coerce, z} from 'zod';
export const expenseSchema = z.object({
    name: z.string(),
    day: z.coerce.date(),
    amount: z.coerce.number(),
    category: z.enum(["Food", "Transportation", "Health and Personal Care", "Housing and Utilities", "Education", "Others"])
});
export const budgetSchema = z.object({
    budget: coerce.number().positive("Budget must be greater than 0")
})