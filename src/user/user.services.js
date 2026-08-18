
import { addExpenseRepository } from "./user.repositories.js";
import { getExpensesRepository } from "./user.repositories.js";
import { deleteExpenseRepository } from "./user.repositories.js";
import { editExpenseRepository } from "./user.repositories.js";
import { totalExpenseRepository } from "./user.repositories.js";
import { numberOfDaysRepository } from "./user.repositories.js";
import { monthlyBudgetRepository } from "./user.repositories.js";
import { currentMonthDailyAverageRepository } from "./user.repositories.js";
import { overallDailyAverageRepository } from "./user.repositories.js";
import { numberofTransactionsRepository } from "./user.repositories.js";
import { dayWithMostTransactionsRepository } from "./user.repositories.js";
import { highestExpenseDateRepository } from "./user.repositories.js";
import { lowestExpenseDateRepository } from "./user.repositories.js";
import { foodTotalRepository } from "./user.repositories.js";
import { transpoTotalRepository } from "./user.repositories.js";
import { housingAndUtilitiesTotalRepository } from "./user.repositories.js";
import { educationTotalRepository } from "./user.repositories.js";
import { healthTotalRepository } from "./user.repositories.js";
import { othersTotalRepository } from "./user.repositories.js";
import { expenseRankingsRepository } from "./user.repositories.js";
import { archivedExpensesRepository } from "./user.repositories.js";
import { restoreExpenseRepository } from "./user.repositories.js";
import { updateMonthlyBudgetRepository } from "./user.repositories.js";

import { totalExpenseThisMonthRepository } from "./user.repositories.js";
import { transactionsThisMonthRepository } from "./user.repositories.js";
import { busiestDayThisMonthRepository } from "./user.repositories.js";
import { highestExpenseDateThisMonthRepository } from "./user.repositories.js";
import { lowestExpenseDateThisMonthRepository } from "./user.repositories.js";
import { foodTotalThisMonthRepository } from "./user.repositories.js";
import { transpoTotalThisMonthRepository } from "./user.repositories.js";
import { housingAndUtilitiesTotalThisMonthRepository } from "./user.repositories.js";
import { educationTotalThisMonthRepository } from "./user.repositories.js";
import { healthTotalThisMonthRepository } from "./user.repositories.js";
import { othersTotalThisMonthRepository } from "./user.repositories.js";

import { expenseDaysChartRepository } from "./user.repositories.js";
export async function addExpenseService(user, name, day, amount, category){
    try{
      const userid = user.user;
      await addExpenseRepository(name, day, amount, category, userid);
    }catch(err){
      console.log(err);
      throw err;
    }
}
export async function getExpensesService(user){
  try{
    const userid = user.user;
    const expenses = await getExpensesRepository(userid);
    return expenses;
  }catch(err){
    console.log(err);
    throw err;
  }
}
export async function deleteExpenseService(expenseid){
   try{
     await deleteExpenseRepository(expenseid);
   }catch(err){
    console.log(err);
    throw err;
   }
}
export async function editExpenseService(name, day, amount, category, expenseid){
  try{
    await editExpenseRepository(name, day, amount, category, expenseid);
  }catch(err){
    console.log(err);
    throw err;
  }
}

export async function dashBoardService(userid){
  try{
     const totalExpense = await totalExpenseRepository(userid);
     const numberOfDays = await numberOfDaysRepository(userid);
     const monthlyBudget = await monthlyBudgetRepository(userid);
     const monthlyBudget2 = Math.round(Number(monthlyBudget));
     const currentMonthAverage = await currentMonthDailyAverageRepository(userid);
     const overallAverage = await overallDailyAverageRepository(userid);
     const numberOfTransaction = await numberofTransactionsRepository(userid);
     const dayOfMostTransactions = await dayWithMostTransactionsRepository(userid);
     const highest = await highestExpenseDateRepository(userid);
     const lowest = await lowestExpenseDateRepository(userid);
     const food = await foodTotalRepository(userid);
     const traspo = await transpoTotalRepository(userid);
     const housing = await housingAndUtilitiesTotalRepository(userid);
     const education = await educationTotalRepository(userid);
     const health = await healthTotalRepository(userid);
     const others = await othersTotalRepository(userid);

     return {
          success: true,
          dashboard: true,
          total: totalExpense,
          numberOfDays: numberOfDays,
          monthlyBudget: monthlyBudget2,
          currentMonthAverage: currentMonthAverage,
          overallAverage: overallAverage,
          numberOfTransactions : numberOfTransaction,
          dayWithMostTransactions: dayOfMostTransactions,
          highest: highest,
          lowest: lowest,
          food: food,
          transpo: traspo,
          housing: housing,
          educ: education,
          health: health,
          others: others
     }
     
  }catch(err){
    console.log(err);
    throw err;
  }
}
export async function rankingsService(userid){
  try{
    const rankings = await expenseRankingsRepository(userid);
    return rankings;
  }catch(err){
    console.log(err);
    throw err;
  }
}
export async function archivesService(userid){
  try{
    const archives = await archivedExpensesRepository(userid);
    return archives;
  }catch(err){
    console.log(err);
    throw err;
  }
}
export async function restoreExpenseService(expenseid, userid){
  try{
    await restoreExpenseRepository(expenseid, userid)
  }catch(err){
    console.log(err);
    throw err;
  }
}

export async function updateMonthlyBudgetService(userid, budget){
  try{
    await updateMonthlyBudgetRepository(userid, budget);
  }catch(err){
    console.log(err);
    throw err;
  }
}
export async function thisMonthReportService(userid){
  try{
    const total = await totalExpenseThisMonthRepository(userid);
    const budget = await monthlyBudgetRepository(userid);
    const avg = await currentMonthDailyAverageRepository(userid);
    const transactions = await transactionsThisMonthRepository(userid);
    const busiest = await busiestDayThisMonthRepository(userid);
    const highest = await highestExpenseDateThisMonthRepository(userid);
    const lowest = await lowestExpenseDateThisMonthRepository(userid);
    const food = await foodTotalThisMonthRepository(userid);
    const transpo = await transpoTotalThisMonthRepository(userid);
    const housing = await housingAndUtilitiesTotalThisMonthRepository(userid);
    const education = await educationTotalThisMonthRepository(userid);
    const health = await healthTotalThisMonthRepository(userid);
    const others = await othersTotalThisMonthRepository(userid);

    return {
      success: true,
      monthlyReport: true,
      total: total,
      budget: budget,
      avg: avg,
      transactions: transactions,
      busiest: busiest,
      highest: highest,
      lowest: lowest,
      food: food,
      transpo: transpo,
      housing: housing,
      education: education,
      health: health,
      others: others
    }
  }catch(err){
    console.log(err);
    throw err;
  }
}
/*export async function barChartService(userid){
  try{
    const foodTotal = await foodTotalRepository(userid)
  }catch(err){
    console.log(err);
    throw err;
  }
}*/
export async function expenseDaysChartService(userid){
  try{
    const data = await expenseDaysChartRepository(userid);
    return data;
  }catch(err){
    console.log(err);
    throw err;
  }
}