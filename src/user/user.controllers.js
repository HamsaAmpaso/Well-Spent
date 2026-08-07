import { addExpenseService } from "./user.services.js";
import { getExpensesService } from "./user.services.js";
import { deleteExpenseService } from "./user.services.js";
import { editExpenseService } from "./user.services.js";
import { dashBoardService } from "./user.services.js";
import { rankingsService } from "./user.services.js";
import { archivesService } from "./user.services.js";
import { restoreExpenseService } from "./user.services.js";
import { updateMonthlyBudgetService } from "./user.services.js";
import { thisMonthReportService } from "./user.services.js";
export async function addExpenseController(req, res, next){
    try{
        const name = req.body.name;
        const day = req.body.day;
        const amount = req.body.amount;
        const category = req.body.category;
        await addExpenseService(req.user,name, day, amount, category );
        res.status(201).json({
            success: true,
            addExpense: true,
            validationError: false
        });
    }catch(err){
        next(err);
    }
}
export async function getExpensesController(req, res, next){
    try{
        const expenses = await getExpensesService(req.user);
        expenses.success = true;
        expenses.getExpenses = true;
        expenses.forErrorbox = false;
        res.status(200).json(expenses);
    }catch(err){
        next(err);
    }
}
export async function deleteExpenseController(req, res, next){
    try{
        const expenseid = req.params.id;
        await deleteExpenseService(expenseid);
        res.status(200).json({
            success: true,
            deleted: true
        });
    }catch(err){
        next(err);
    }
}
export async function editExpenseController(req, res, next){
    try{
        const name = req.body.name;
        const day = req.body.day;
        const amount = req.body.amount;
        const category = req.body.category;
        const expenseid = req.params.id;
        await editExpenseService(name, day, amount, category, expenseid);
        res.status(200).json({
            success: true,
            edited: true
        })
    }catch(err){
        next(err);
    }
}
export async function dashboardController(req, res, next){
    try{
        const userid = req.user.user;
        const dashboard = await dashBoardService(userid);
        res.status(200).json(dashboard);
    }catch(err){
        next(err);
    }
}
export async function rankingsController(req, res ,next){
    try{
        const userid = req.user.user;
        const rankings = await rankingsService(userid);
        res.status(200).json(rankings);
    }catch(err){
        next(err);
    }
}
export async function archivesController(req, res, next){
    try{
        const userid = req.user.user;
        const archives = await archivesService(userid);
        res.status(200).json(archives);
    }catch(err){
        next(err);
    }
}
export async function restoreExpenseController(req, res, next){
    try{
        const expenseid = req.params.id;
        const userid = req.user.user; 
        await restoreExpenseService(expenseid, userid);
        res.status(200).json({
            success: true,
            restore: true
        })
    }catch(err){
        next(err);
    }
}
export async function updateMonthlyBudgetController(req, res, next){
    try{
        const userid = req.user.user;
        const budget = req.body.budget;
        await updateMonthlyBudgetService(userid, budget);
        res.status(200).json({
            success: true,
            budget: true
        });
    }catch(err){
        next(err);
    }
}
export async function thisMonthReportController(req, res, next){
    try{
        const userid = req.user.user;
        const report = await thisMonthReportService(userid);
        res.status(200).json(report);
    }catch(err){
        console.log(err);
        throw err;
    }
}