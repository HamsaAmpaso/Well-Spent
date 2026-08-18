import { pool } from "../db.js";
export async function addExpenseRepository(name, day, amount, category, userid){
    try{
        await pool.query('INSERT INTO expenses (name, day, amount, category, belongs_to) VALUES ($1, $2, $3, $4, $5)', [name, day, amount, category, userid]);
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function getExpensesRepository(userid){
    try{
        const expenses = await pool.query('SELECT * FROM expenses WHERE belongs_to = $1 AND deleted_at IS NULL ORDER BY day DESC', [userid]);
        return {
            rowCount: expenses.rowCount,
            rows: expenses.rows
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function deleteExpenseRepository(expenseid){
    try{
       await pool.query('UPDATE expenses SET deleted_at = NOW() WHERE expenseid = $1', [expenseid]);
    }catch(err){
       console.log(err);
       throw err;
    }
}
export async function editExpenseRepository(name, day, amount, category, expenseid){
    try{
        await pool.query('UPDATE expenses SET name = $1, day = $2, amount = $3, category = $4 WHERE expenseid = $5', [name, day, amount, category, expenseid]);
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function totalExpenseRepository(userid){
    try{
        const total = await pool.query('SELECT COALESCE(SUM(amount), 0) AS "totalExpense" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1', [userid]);
        return total.rows[0]?.totalExpense ?? 0;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function numberOfDaysRepository(userid){
    try{
        const numberOfDays = await pool.query('SELECT COUNT(DISTINCT day) AS "numberOfDays" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1', [userid]);
        return numberOfDays.rows[0]?.numberOfDays ?? 0
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function monthlyBudgetRepository(userid){
    try{
        const monthlyBudget = await pool.query('SELECT monthlybudget FROM users WHERE userid = $1', [userid]);
        return monthlyBudget.rows[0]?.monthlybudget ?? 0;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function currentMonthDailyAverageRepository(userid){
    try{
        const currentMonthDailyAverage = await pool.query(`SELECT COALESCE(SUM(amount), 0) / EXTRACT(DAY FROM CURRENT_DATE) AS "currentMonthDailyAverage" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return currentMonthDailyAverage.rows[0]?.currentMonthDailyAverage ?? 0;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function overallDailyAverageRepository(userid){
    try{
        const overallDailyAverage = await pool.query(`SELECT COALESCE(SUM(amount), 0) / NULLIF(COUNT(DISTINCT day), 0) AS "overallDailyAverage" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1`, [userid]);
        return overallDailyAverage.rows[0]?.overallDailyAverage ?? 0;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function numberofTransactionsRepository(userid){
    try{
        const numberOfTransactions = await pool.query('SELECT COUNT(DISTINCT expenseid) AS "numberOfTransactions" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1', [userid]);
        return numberOfTransactions.rows[0]?.numberOfTransactions ?? 0;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function dayWithMostTransactionsRepository(userid){
    try{
        const dayWithMostTransactions = await pool.query('SELECT day AS "dayWithMostTransactions" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 GROUP BY day ORDER BY COUNT(*) DESC LIMIT 1', [userid]);
        return dayWithMostTransactions.rows[0]?.dayWithMostTransactions ?? 0;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function highestExpenseDateRepository(userid){
    try{
        const highestExpenseDate = await pool.query('SELECT day AS "highestExpenseDate" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 GROUP BY day ORDER BY SUM(amount) DESC LIMIT 1', [userid]);
        return highestExpenseDate.rows[0]?.highestExpenseDate ?? 0;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function lowestExpenseDateRepository(userid){
    try{
        const lowestExpenseDate = await pool.query('SELECT day AS "lowestExpenseDate" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 GROUP BY day ORDER BY SUM(amount) ASC LIMIT 1', [userid]);
        return lowestExpenseDate.rows[0]?.lowestExpenseDate ?? 0;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function foodTotalRepository(userid){
    try{
        const foodtotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "foodTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Food'`, [userid]);
        return foodtotal.rows[0].foodTotal ;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function educationTotalRepository(userid){
    try{
        const educationtotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "educationTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Education'`, [userid]);
        return educationtotal.rows[0].educationTotal ;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function othersTotalRepository(userid){
    try{
        const otherstotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "othersTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Others'`, [userid]);
        return otherstotal.rows[0].othersTotal ;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function housingAndUtilitiesTotalRepository(userid){
    try{
        const housingtotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "housingTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Housing and Utilities'`, [userid]);
        return housingtotal.rows[0].housingTotal;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function healthTotalRepository(userid){
    try{
        const healthtotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "healthTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Health and Personal Care'`, [userid]);
        return healthtotal.rows[0].healthTotal;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function transpoTotalRepository(userid){
    try{
        const transpototal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "transpoTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Transportation'`, [userid]);
        return transpototal.rows[0].transpoTotal;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function expenseRankingsRepository(userid){
    try{
        const rankings = await pool.query('SELECT * FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 ORDER BY amount DESC LIMIT 10', [userid]);
        return {
            rankings: true,
            success: true,
            rows: rankings.rows,
            rowCount: rankings.rowCount
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function archivedExpensesRepository(userid){
    try{
        const archives = await pool.query('SELECT * FROM expenses WHERE deleted_at IS NOT NULL AND belongs_to = $1 ORDER BY day DESC', [userid]);
        return {
            archives: true,
            success: true,
            rows: archives.rows,
            rowCount: archives.rowCount
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function restoreExpenseRepository(expenseid, userid){
    try{
        await pool.query('UPDATE expenses SET deleted_at = NULL WHERE expenseid = $1 AND belongs_to = $2', [expenseid, userid]);
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function updateMonthlyBudgetRepository(userid, budget){
    try{
        await pool.query('UPDATE users SET monthlybudget = $1 WHERE userid = $2', [budget, userid]);
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function totalExpenseThisMonthRepository(userid){
    try{
        const total = await pool.query(`SELECT  COALESCE(SUM(amount), 0) AS "thisMonthTotal" FROM expenses WHERE belongs_to = $1 AND deleted_at IS NULL AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return total.rows[0].thisMonthTotal;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function transactionsThisMonthRepository(userid){
    try{
        const transactions = await pool.query(`SELECT COUNT(*) AS "thisMonthTransactions" FROM expenses WHERE belongs_to = $1 AND deleted_at IS NULL AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return transactions.rows[0].thisMonthTransactions;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function busiestDayThisMonthRepository(userid){
    try{
        const busiest =  await pool.query(`SELECT day AS "dayWithMostTransactions" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE) GROUP BY day ORDER BY COUNT(*) DESC LIMIT 1`, [userid]);
        return busiest.rows[0].dayWithMostTransactions;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function highestExpenseDateThisMonthRepository(userid){
    try{
        const highestExpenseDate = await pool.query(`SELECT day AS "highestExpenseDate" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE) GROUP BY day ORDER BY SUM(amount) DESC LIMIT 1`, [userid]);
        return highestExpenseDate.rows[0]?.highestExpenseDate ?? null;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function lowestExpenseDateThisMonthRepository(userid){
    try{
        const lowestExpenseDate = await pool.query(`SELECT day AS "lowestExpenseDate" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE) GROUP BY day ORDER BY SUM(amount) ASC LIMIT 1`, [userid]);
        return lowestExpenseDate.rows[0]?.lowestExpenseDate ?? null;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function foodTotalThisMonthRepository(userid){
    try{
        const foodtotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "foodTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Food' AND belongs_to = $1 AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return foodtotal.rows[0].foodTotal ;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function transpoTotalThisMonthRepository(userid){
    try{
        const transpototal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "transpoTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Transportation' AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return transpototal.rows[0].transpoTotal;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function housingAndUtilitiesTotalThisMonthRepository(userid){
    try{
        const housingtotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "housingTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Housing and Utilities' AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return housingtotal.rows[0].housingTotal;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function educationTotalThisMonthRepository(userid){
    try{
        const educationtotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "educationTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Education' AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return educationtotal.rows[0].educationTotal ;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function healthTotalThisMonthRepository(userid){
    try{
        const healthtotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "healthTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Health and Personal Care' AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return healthtotal.rows[0].healthTotal;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function othersTotalThisMonthRepository(userid){
    try{
        const otherstotal = await pool.query(`SELECT COALESCE(SUM(amount), 0) AS "othersTotal" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1 AND category = 'Others' AND DATE_TRUNC('month', day) = DATE_TRUNC('month', CURRENT_DATE)`, [userid]);
        return otherstotal.rows[0].othersTotal ;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export async function expenseDaysChartRepository(userid){
    try{
       
        const expensePerDay = await pool.query(`SELECT day, COALESCE(SUM(amount), 0) AS "totalThisDay" FROM expenses WHERE deleted_at IS NULL AND belongs_to = $1  GROUP BY day ORDER BY day ASC`, [userid]);
        const categoryTotals = await pool.query(`
            SELECT
                category AS "category",
                COALESCE(SUM(amount), 0) AS "total"
            FROM expenses
            WHERE deleted_at IS NULL
              AND belongs_to = $1
            GROUP BY category
            ORDER BY total DESC
        `, [userid]);

        const monthly_total = await pool.query(`SELECT
         TO_CHAR(day, 'YYYY-MM') AS month,
         SUM(amount) AS total
         FROM expenses
         WHERE deleted_at IS NULL
         AND belongs_to = $1
         GROUP BY TO_CHAR(day, 'YYYY-MM')
         ORDER BY month ASC;`, [userid]);

        return {
            rowCount: expensePerDay.rowCount,
            rows: expensePerDay.rows,
            success: true,
            daysChart: true,
            pie: categoryTotals.rows,
            monthlyTotal: monthly_total.rows
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}





