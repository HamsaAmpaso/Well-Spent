import { signupAPICaller } from "./api-callers.js";
import { loginAPICaller } from "./api-callers.js";
import { logoutAPICaller } from "./api-callers.js";
import { addExpenseAPICaller } from "./api-callers.js";
import { getExpensesAPICaller } from "./api-callers.js";
import { deleteExpenseAPICaller } from "./api-callers.js";
import { editExpenseAPICaller } from "./api-callers.js";
import { dashboardAPICaller } from "./api-callers.js";
import { rankingsAPICaller } from "./api-callers.js";
import { archivedAPICaller } from "./api-callers.js";
import { restoreExpenseAPICaller } from "./api-callers.js";
import { updateBudgetAPICaller } from "./api-callers.js";
import { thisMonthReportAPICaller } from "./api-callers.js";

(()=>{
   const nav = document.querySelector(".mobile-nav");
   const menu = document.querySelector("#menu");
   const close_menu = document.querySelector("#close-menu");
   const overlay = document.querySelector(".overlay");
   const screen_size =  window.matchMedia("(max-width: 768px)");
   const p = document.querySelector("#featuresp");
   const h2 = document.querySelector("#h2");
   const pp = document.querySelector("#pp");
   const children_one = document.querySelector("#children-one");
   const children_two = document.querySelector("#children-two");
   const header = document.querySelector(".header");
   const claims = document.querySelector("#claims");
   const make = document.querySelector("#make");
   const uno = document.querySelector("#uno");
   const dos = document.querySelector("#dos");
   const tres = document.querySelector("#tres");
   const pic_section= document.querySelector(".pic-section");
   const get_started_grid = document.querySelector(".get-started-grid");
   const loginBox = document.querySelector("#loginbox");
   const loginBoxShowDesktop = document.querySelector(".login");
   const loginBpxShowMobile = document.querySelector("#login-mobile");
   const signupBoxShowDesktop = document.querySelector(".signup");
   const signupBoxShowMobile = document.querySelector("#signup-mobile");
   const cancelBtnLogin = document.querySelector("#cancelbtn");
   const signupBox = document.querySelector("#signupbox");
   const cancelBtnLoginSignup = document.querySelector("#cancelbtn-signup");
   const loginBTN = document.querySelector("#loginbtn");
   const loginUsernameInput = document.querySelector("#username");
   const usernameError = document.querySelector("#username-error");
   const loginPasswordInput = document.querySelector("#password");
   const passwordError = document.querySelector("#password-error");
   const inputs = document.querySelectorAll("#username, #password, #username-signup, #password-signup, #name, #day, #amount, #category, #name-edit, #day-edit, #amount-edit, #category-edit");
   const signupBTN = document.querySelector("#signupbtn");
   const signupUsernameInput = document.querySelector("#username-signup");
   const signupUsernameError = document.querySelector("#username-error-signup");
   const signupPasswordInput = document.querySelector("#password-signup");
   const signupPasswordError = document.querySelector("#password-error-signup");
   const featuresBTN = document.querySelector("#features-btn");
   const footerBTN = document.querySelector("#footer-btn");
   const getStarted = document.querySelector(".get-started");
   const anotherGetStarted = document.querySelector("#another-get-started");
   const signupErrorBox = document.querySelector("#signup-error-box");
   const okBTN = document.querySelector(".okk");
   const bodyElement = document.querySelector(".body");
   const mainElement = document.querySelector(".main");
   const sidebar = document.querySelector(".sidebar");
   const loginDiv = document.querySelector(".logged-in-div");
   const status = localStorage.getItem("user-status");
   const navDesktop = document.querySelector(".nav");
   const openSidebarBTN = document.querySelector("#open-sidebar-btn");
   const closeSidebar = document.querySelector("#close-sidebar-btn");
   const loginErrorBox = document.querySelector("#login-error-box");
   const closeloginErrorBoxBtn = document.querySelector(".okk2");
   const logoutBTN = document.querySelector("#logout-btn");
   const closeLogoutErrorBox = document.querySelector(".okk3");
   const logoutErrorBox = document.querySelector("#logout-error-box")
   const confirmLogoutBox = document.querySelector("#logout-confirmation-box");
   const confirmLogout = document.querySelector(".okk4");
   const cancelLogout = document.querySelector("#cancel-logout");
   const addExpenseBox = document.querySelector("#the-add-box");
   const showAddExpenseBox = document.querySelector("#the-add-expense-btn");
   const cancelAddExpense = document.querySelector("#cancel-add-expense");
   const confirmAddExpense = document.querySelector("#confirm-add-expense");
   const nameError = document.querySelector("#name-error");
   const nameInput = document.querySelector("#name");
   const dayError = document.querySelector("#day-error");
   const dayInput = document.querySelector("#day");
   const amountError = document.querySelector("#amount-error");
   const amountInput = document.querySelector("#amount");
   const categoryError = document.querySelector("#category-error");
   const categoryInput = document.querySelector("#category");
   const list = document.querySelector(".list");
   const list2 = document.querySelector(".list2");
   const categories = ["Food", "Transportation", "Health and Personal Care", "Housing and Utilities", "Education", "Others"]; 
   const addExpenseErrorBox = document.querySelector("#the-add-expense-error-box");
   const closeAddExpenseErrorBox = document.querySelector(".okay"); 
   const getExpensesBTN = document.querySelector("#view-all-expenses");
   const getExpensesErrorBox = document.querySelector("#get-expenses-error-box");
   const closeGetExpensesErrorBox = document.querySelector(".okay2");
   const deleteErrorBox = document.querySelector("#delete-error-box");
   const closeDeleteErrorBox = document.querySelector(".ok-delete");
   const editErrorBox = document.querySelector("#edit-error-box");
   const closeEditErrorbox = document.querySelector(".ok-edit");

   const editExpenseBox = document.querySelector("#the-edit-box");
   const cancelEditExpense = document.querySelector("#cancel-edit-expense");
   const confirmEditExpense = document.querySelector("#confirm-edit-expense");
   const nameErrorEdit = document.querySelector("#name-error-edit");
   const nameInputEdit = document.querySelector("#name-edit");
   const dayErrorEdit = document.querySelector("#day-error-edit");
   const dayInputEdit = document.querySelector("#day-edit");
   const amountErrorEdit = document.querySelector("#amount-error-edit");
   const amountInputEdit = document.querySelector("#amount-edit");
   const categoryErrorEdit = document.querySelector("#category-error-edit");
   const categoryInputEdit = document.querySelector("#category-edit");

   const dashboardBTn = document.querySelector("#view-dashboard");
   const dashboardErrorBox = document.querySelector("#dashboard-error-box");
   const closeDashboardErrorBox = document.querySelector(".ok-dashboard");
   const rankingsErrorbox = document.querySelector("#rankings-error-box");
   const closeRankingsErrorBox = document.querySelector(".ok-rankings");
   const rankingsBTN = document.querySelector("#view-expense-rankings");
   const archivedErrorBox = document.querySelector("#archived-error-box");
   const closeArchivedErrorBox = document.querySelector(".ok-archived");
   const archivedbtn = document.querySelector("#view-archived-expenses");
   const restoreErrorBox = document.querySelector("#restore-error-box");
   const closeRestoreErrorbox = document.querySelector(".ok-restore");

   const budgetBox = document.querySelector("#budget-box");
   const budgetinput = document.querySelector("#budget");
   const budgetError = document.querySelector("#budget-error");
   const confirmBudgetBTN = document.querySelector("#budgetbtn");
   const cancelBudgetBTN = document.querySelector("#cancelbtn-budget");
   const showBudgetBoxBTN = document.querySelector("#set-preffered-monthly-budget");
   const budgetErrorBox = document.querySelector("#budget-error-box");
   const closeBudgetErrorBox = document.querySelector(".ok-budget");

   const reportError = document.querySelector("#report-error-box");
   const closeReportError = document.querySelector(".ok-report");
   const viewReportBTN = document.querySelector("#view-expense-report-per-month");

   viewReportBTN.addEventListener("click", async ()=>{
     try{
        sidebar.classList.remove("opened");
        openSidebarBTN.classList.remove("hide");
        bodyElement.classList.remove("sidebar-opened");
        const report = await thisMonthReportAPICaller();
        if(!report.success && !report.monthlyReport && report.forErrorBox){
            reportError.classList.add("showing");
            overlay.classList.add("active");
            sidebar.classList.remove("opened");
            openSidebarBTN.classList.remove("hide");
            bodyElement.classList.remove("sidebar-opened");
            return;
        }
        reportRenderer(report);
     }catch(err){
        reportError.classList.add("showing");
        overlay.classList.add("active");
        sidebar.classList.remove("opened");
        openSidebarBTN.classList.remove("hide");
        bodyElement.classList.remove("sidebar-opened");
     }
   });

   closeReportError.addEventListener("click", ()=>{
        reportError.classList.remove("showing");
        overlay.classList.remove("active");
   });



   function reportRenderer(arr){
       loginDiv.innerHTML = "";
       loginDiv.classList.remove("view-expenses");
       loginDiv.classList.remove("dashboard");
       loginDiv.classList.remove("rankings");
       loginDiv.classList.remove("archives");
       loginDiv.classList.add("report");
       const h2 = document.createElement("h2");
       h2.textContent = "Current Month Expense Report";
       loginDiv.appendChild(h2);
       const report_div = document.createElement("div");
       report_div.classList.add("report-div");
       loginDiv.appendChild(report_div);

       const total_div = document.createElement("div");
       total_div.classList.add("square");
       total_div.id = 'total-square';
       const total_h4 = document.createElement("h4");
       total_h4.textContent = "Total Expenses";
       total_div.appendChild(total_h4);
       const total_p = document.createElement("p");
       total_p.textContent = arr.total;
       total_div.appendChild(total_p);
       report_div.appendChild(total_div);

       const budget_div = document.createElement("div");
       budget_div.classList.add("square");
       budget_div.id = 'budget-square';
       report_div.appendChild(budget_div);
       const budget_h4 = document.createElement("h4");
       budget_h4.textContent = 'Monthly Budget';
       budget_div.appendChild(budget_h4);
       const budget_p = document.createElement("p");
       budget_p.textContent = arr.budget;
       budget_div.appendChild(budget_p);

       const avg_div = document.createElement("div");
       avg_div.classList.add("square");
       avg_div.id = 'avg-square';
       report_div.appendChild(avg_div);
       const avg_h4 =  document.createElement("h4");
       avg_h4.textContent = 'Daily Average';
       avg_div.appendChild(avg_h4);
       const avg_p = document.createElement("p");
       avg_p.textContent = Math.round(arr.avg);
       avg_div.appendChild(avg_p);

       const trans_div = document.createElement("div");
       trans_div.classList.add("square");
       trans_div.id = 'transactions-square';
       report_div.appendChild(trans_div);
       const trans_h4 = document.createElement("h4");
       trans_h4.textContent = 'Transactions';
       trans_div.appendChild(trans_h4);
       const trans_p = document.createElement("p");
       trans_p.textContent = arr.transactions;
       trans_div.appendChild(trans_p);

       const remaining_div = document.createElement("div");
       remaining_div.classList.add("square");
       remaining_div.id = 'remaining-square';
       report_div.appendChild(remaining_div);
       const remaining_h4 =  document.createElement("h4");
       remaining_h4.textContent = 'Remaining Budget';
       remaining_div.appendChild(remaining_h4);
       const remaining_p = document.createElement("p");
       const remaining_budget = Number(arr.budget) - Number(arr.total);
       remaining_p.textContent = remaining_budget;
       remaining_div.appendChild(remaining_p);

       const busiest_div = document.createElement("div");
       busiest_div.classList.add("square");
       busiest_div.id = 'busiest-square';
       report_div.appendChild(busiest_div);
       const busiest_h4 = document.createElement("h4");
       busiest_h4.textContent = 'Busiest Day';
       busiest_div.appendChild(busiest_h4);
       const busiest_p = document.createElement("p");
       if(arr.transactions === 0){
           busiest_p.textContent = 'N/A';
       }else{
        busiest_p.textContent = new Date(arr.busiest).toLocaleDateString();
       }
       busiest_div.appendChild(busiest_p);

       const high_div =  document.createElement("div");
       high_div.classList.add("square");
       high_div.id = 'highest-square';
       report_div.appendChild(high_div);
       const high_h4 = document.createElement("h4");
       high_h4.textContent = 'Highest Expense Day';
       high_div.appendChild(high_h4);
       const high_p =  document.createElement("p");
       if(arr.transactions === 0){
           high_p.textContent = 'N/A';
       }else{
           high_p.textContent = new Date(arr.highest).toLocaleDateString();
       }
       high_div.appendChild(high_p);

       const lowest_div =  document.createElement("div");
       lowest_div.classList.add("square");
       lowest_div.id = 'lowest-square';
       report_div.appendChild(lowest_div);
       const lowest_h4 = document.createElement("h4");
       lowest_h4.textContent = 'Lowest Expense Day';
       lowest_div.appendChild(lowest_h4);
       const lowestP = document.createElement("p");
       if(arr.transactions === 0){
           lowestP.textContent = 'N/A';
       }else{
           lowestP.textContent = new Date(arr.lowest).toLocaleDateString();
       }
       lowest_div.appendChild(lowestP);

       const food_div = document.createElement("div");
       food_div.classList.add("square");
       food_div.id = 'food-square';
       report_div.appendChild(food_div);
       const food_h4 = document.createElement("h4");
       food_h4.textContent = 'Food Total';
       food_div.appendChild(food_h4);
       const food_p = document.createElement("p");
       food_p.textContent = arr.food;
       food_div.appendChild(food_p);

       const transpo_div = document.createElement("div");
       transpo_div.classList.add("square");
       transpo_div.id = 'transpo-square';
       report_div.appendChild(transpo_div);
       const transpo_h4 = document.createElement("h4");
       transpo_h4.textContent = 'Transpo Total';
       transpo_div.appendChild(transpo_h4);
       const transpo_p = document.createElement("p");
       transpo_p.textContent = arr.transpo;
       transpo_div.appendChild(transpo_p);

       const housing_div = document.createElement("div");
       housing_div.classList.add("square");
       housing_div.id = 'housing-square';
       report_div.appendChild(housing_div);
       const housing_h4 = document.createElement("h4");
       housing_h4.textContent = 'Housing Total';
       housing_div.appendChild(housing_h4);
       const housing_p = document.createElement("p");
       housing_p.textContent = arr.housing;
       housing_div.appendChild(housing_p);

       const education_div = document.createElement("div");
       education_div.classList.add("square");
       education_div.id = 'education-square';
       report_div.appendChild(education_div);
       const education_h4 = document.createElement("h4");
       education_h4.textContent = 'Education Total';
       education_div.appendChild(education_h4);
       const education_p = document.createElement("p");
       education_p.textContent = arr.education;
       education_div.appendChild(education_p);

       const health_div = document.createElement("div");
       health_div.classList.add("square");
       health_div.id = 'health-square';
       report_div.appendChild(health_div);
       const health_h4 = document.createElement("h4");
       health_h4.textContent = 'Health Total';
       health_div.appendChild(health_h4);
       const health_p = document.createElement("p");
       health_p.textContent = arr.health;
       health_div.appendChild(health_p);

       const others_div = document.createElement("div");
       others_div.classList.add("square");
       others_div.id = 'others-square';
       report_div.appendChild(others_div);
       const others_h4 = document.createElement("h4");
       others_h4.textContent = 'Others Total';
       others_div.appendChild(others_h4);
       const others_p = document.createElement("p");
       others_p.textContent = arr.others;
       others_div.appendChild(others_p);









   }

   showBudgetBoxBTN.addEventListener("click", ()=>{
    budgetBox.classList.add("used");
    overlay.classList.add("active");
    sidebar.classList.remove("opened");
            openSidebarBTN.classList.remove("hide");
            bodyElement.classList.remove("sidebar-opened");
   });

   cancelBudgetBTN.addEventListener("click", ()=>{
    budgetBox.classList.remove("used");
    overlay.classList.remove("active");
    budgetError.classList.remove("errored");
    budgetError.textContent = "";
    budgetinput.value = "";
   });

   closeBudgetErrorBox.addEventListener("click", ()=>{
    budgetErrorBox.classList.remove("showing");
    overlay.classList.remove("active");
   })

   confirmBudgetBTN.addEventListener("click", async ()=>{
    let hasError = false;
    if(budgetinput.value.trim() === "" && isNaN(Number(budgetinput.value.trim())) && Number(budgetinput.value.trim()) < 0){
       budgetError.textContent = "Please type a proper new monthly budget";
       budgetError.classList.add("errored");
       hasError = true;
    }
    const budget = Number(budgetinput.value.trim());

    try{
        const updating = await updateBudgetAPICaller(budget);
        if(!updating.success && !updating.budget && updating.forErrorBox){
            budgetErrorBox.classList.add("showing");
            overlay.classList.add("active");
            budgetBox.classList.remove("used");
            budgetError.classList.remove("errored");
            budgetError.textContent = "";
            budgetinput.value = "";
            return;
        } 
        dashboardAPICallerWrapper();
    }catch(err){
        budgetErrorBox.classList.add("showing");
        overlay.classList.add("active");
        budgetBox.classList.remove("used");
        
        budgetError.classList.remove("errored");
        budgetError.textContent = "";
        budgetinput.value = "";
        return;

    }

    budgetBox.classList.remove("used");
    overlay.classList.remove("active");
    budgetError.classList.remove("errored");
    budgetError.textContent = "";
    budgetinput.value = "";
   });






   function archivesRenderer(arr){
       loginDiv.innerHTML = "";
       loginDiv.classList.remove("view-expenses");
       loginDiv.classList.remove("dashboard");
       loginDiv.classList.remove("rankings");
       loginDiv.classList.add("archives");
       const title = document.createElement("h2");
       title.textContent = 'Archived Expenses';
       loginDiv.appendChild(title);
       const rankings_container = document.createElement("div");
       rankings_container.classList.add("archives-div");
       loginDiv.appendChild(rankings_container);
       arr.forEach((a)=>{
           const entry = document.createElement("div");
           entry.classList.add("slot");
           rankings_container.appendChild(entry);
           const name = document.createElement("p");
           name.textContent = `Name: ${a.name}`;
           entry.appendChild(name);
           const day = document.createElement("p");
           const formatted = new Date(a.day).toLocaleDateString();
           day.textContent = `Date: ${formatted}`;
           entry.appendChild(day);
           const amount = document.createElement("p");
           amount.textContent = `Amount: ${a.amount}`;
           entry.appendChild(amount);
           const category = document.createElement("p");
           category.textContent = `Category: ${a.category}`;
           entry.appendChild(category);
           const btn = document.createElement("div");
           btn.classList.add("restore-btn");
           btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M440-320h80v-166l64 62 56-56-160-160-160 160 56 56 64-62v166ZM280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>`;
           btn.dataset.id = a.expenseid;
           entry.appendChild(btn);
           btn.addEventListener("click", async () =>{
              try{
                  const restoring = await restoreExpenseAPICaller(btn.dataset.id);
                  if(!restoring.success && !restoring.restore && restoring.forErrorBox){
                    restoreErrorBox.classList.add("showing");
                    overlay.classList.add("active");
                    return;
                  }
                  await getExpenseWrapper();

              }catch(err){
                  restoreErrorBox.classList.add("showing");
                  overlay.classList.add("active");
              }
           })
       });
   }

   closeArchivedErrorBox.addEventListener("click", ()=>{
      archivedErrorBox.classList.remove("showing");
      overlay.classList.remove("active");
   })

   async function archivesAPICallerWrapper(){
    try{
         const archives = await archivedAPICaller();
         if(!archives.success && !archives.archives && archives.forErrorBox){
              archivedErrorBox.classList.add("showing");
              overlay.classList.add("active");
              return;
         }
         archivesRenderer(archives.rows);
    }catch(err){
         archivedErrorBox.classList.add("showing");
         overlay.classList.add("active");
    }
   }

   archivedbtn.addEventListener("click", () =>{
      sidebar.classList.remove("opened");
      openSidebarBTN.classList.remove("hide");
      bodyElement.classList.remove("sidebar-opened");
      archivesAPICallerWrapper();
   })


   function rankingsRenderer(arr){
       loginDiv.innerHTML = "";
       loginDiv.classList.remove("view-expenses");
       loginDiv.classList.remove("dashboard");
       loginDiv.classList.add("rankings");
       const title = document.createElement("h2");
       title.textContent = 'Highest Expenses';
       loginDiv.appendChild(title);
       const rankings_container = document.createElement("div");
       rankings_container.classList.add("rankings-div");
       loginDiv.appendChild(rankings_container);
       arr.forEach((a)=>{
           const entry = document.createElement("div");
           entry.classList.add("entry");
           rankings_container.appendChild(entry);
           const name = document.createElement("p");
           name.textContent = `Name: ${a.name}`;
           entry.appendChild(name);
           const day = document.createElement("p");
           const formatted = new Date(a.day).toLocaleDateString();
           day.textContent = `Date: ${formatted}`;
           entry.appendChild(day);
           const amount = document.createElement("p");
           amount.textContent = `Amount: ${a.amount}`;
           entry.appendChild(amount);
           const category = document.createElement("p");
           category.textContent = `Category: ${a.category}`;
           entry.appendChild(category);
       })
   }
   closeRankingsErrorBox.addEventListener("click", ()=>{
     rankingsErrorbox.classList.remove("showing");
     overlay.classList.remove("active");
   })

   async function rankingsAPICallerWrapper(){
       try{
            const rankings = await rankingsAPICaller();
            if(!rankings.success && !rankings.rankings && rankings.forErrorBox){
                rankingsErrorbox.classList.add("showing");
                overlay.classList.add("active");
                return;
            }
            rankingsRenderer(rankings.rows);
       }catch(err){
            rankingsErrorbox.classList.add("showing");
            overlay.classList.add("active");
       }
   }

   rankingsBTN.addEventListener("click", ()=>{
       sidebar.classList.remove("opened");
       openSidebarBTN.classList.remove("hide");
       bodyElement.classList.remove("sidebar-opened");
       rankingsAPICallerWrapper();
   })


   function dashboardRenderer(d){
       loginDiv.innerHTML = "";
       loginDiv.classList.remove("view-expenses");
       loginDiv.classList.remove("rankings");
       loginDiv.classList.add("dashboard");
       const title = document.createElement("h2");
       title.textContent = 'Expense Dashboard';
       loginDiv.appendChild(title);
       const dashboard = document.createElement("div");
       dashboard.classList.add("dashboard-div");
       loginDiv.appendChild(dashboard);
       const totalDiv = document.createElement("div");
       totalDiv.classList.add("content");
       dashboard.appendChild(totalDiv);
       const totalDivH3 = document.createElement("h3");
       totalDivH3.textContent = `Total Expense:`;
       totalDiv.appendChild(totalDivH3);
       const total = document.createElement("p");
       total.textContent = d.total;
       totalDiv.appendChild(total);

       const numberOfDaysDiv = document.createElement("div");
       numberOfDaysDiv.classList.add("content");
       dashboard.appendChild(numberOfDaysDiv);
       const numberofDaysH3 = document.createElement("h3");
       numberofDaysH3.textContent = `Number of Days:`;
       numberOfDaysDiv.appendChild(numberofDaysH3);
       const numberofdays = document.createElement("p");
       numberofdays.textContent = d.numberOfDays;
       numberOfDaysDiv.appendChild(numberofdays);

       const monthlybudgetDIV = document.createElement("div");
       monthlybudgetDIV.classList.add("content");
       dashboard.appendChild(monthlybudgetDIV);
       const monthlyBudgeth3 = document.createElement("h3");
       monthlyBudgeth3.textContent = 'Monthly Budget:';
       monthlybudgetDIV.appendChild(monthlyBudgeth3);
       const budget = document.createElement("p");
       const budget3 = Number(d.monthlyBudget);
       const budget2 = Math.round(budget3);
       budget.textContent = budget2;
       monthlybudgetDIV.appendChild(budget);

       const currentDiv = document.createElement("div");
       currentDiv.classList.add("content");
       dashboard.appendChild(currentDiv);
       const currrenth3 = document.createElement("h3");
       currrenth3.textContent = 'This Month Daily Avg:';
       currentDiv.appendChild(currrenth3);
       const current = document.createElement("p");
       current.textContent = Math.round(Number(d.currentMonthAverage));
       currentDiv.appendChild(current);

       const overallDiv = document.createElement("div");
       overallDiv.classList.add("content");
       dashboard.appendChild(overallDiv);
       const overallh3 = document.createElement("h3");
       overallh3.textContent = `Daily Average:`;
       overallDiv.appendChild(overallh3);
       const overall = document.createElement("p");
       overall.textContent = d.overallAverage;
       overallDiv.appendChild(overall);

       const numberOfTransactionsDiv = document.createElement("div");
       numberOfTransactionsDiv.classList.add("content");
       dashboard.appendChild(numberOfTransactionsDiv);
       const numberOfTransactionsh3 = document.createElement("h3");
       numberOfTransactionsh3.textContent = `Transactions:`;
       numberOfTransactionsDiv.appendChild(numberOfTransactionsh3);
       const transactions = document.createElement("p");
       transactions.textContent = d.numberOfTransactions;
       numberOfTransactionsDiv.appendChild(transactions);

       const dayWithMostDIV = document.createElement("div");
       dayWithMostDIV.classList.add("content2");
       dashboard.appendChild(dayWithMostDIV);
       const daywithh3 = document.createElement("h3");
       daywithh3.textContent = `Busiest Day:`;
       dayWithMostDIV.appendChild(daywithh3);
       const dayWithDate = new Date(d.dayWithMostTransactions).toLocaleDateString();
       const dayp = document.createElement("p");
       if(d.numberOfTransactions <= 0){
          dayp.textContent = 'N/A';
          dayWithMostDIV.appendChild(dayp);
       }else{
       dayp.textContent = dayWithDate;
       dayWithMostDIV.appendChild(dayp);}

       const highestDiv = document.createElement("div");
       highestDiv.classList.add("content2");
       dashboard.appendChild(highestDiv);
       const highh3 = document.createElement("h3");
       highh3.textContent = `Highest Expense Day:`;
       highestDiv.appendChild(highh3);
       const highp = document.createElement("p");
       if(d.numberOfTransactions <= 0){
        highp.textContent = 'N/A';
        highestDiv.appendChild(highp);
       }else{
       const highDate = new Date(d.highest).toLocaleDateString();
       highp.textContent = highDate;
       highestDiv.appendChild(highp);}

       const lowestDiv = document.createElement("div");
       lowestDiv.classList.add("content2");
       dashboard.appendChild(lowestDiv);
       const lowh3 = document.createElement("h3");
       lowh3.textContent = 'Lowest Expense Day:';
       lowestDiv.appendChild(lowh3);
       const lowp = document.createElement("p");
       if(d.numberOfTransactions <= 0){
        lowp.textContent = 'N/A';
        lowestDiv.appendChild(lowp);
       }else{
       const lowDate = new Date(d.lowest).toLocaleDateString();
       lowp.textContent = lowDate;
       lowestDiv.appendChild(lowp);}

       const foodDiv = document.createElement("div");
       foodDiv.classList.add("content");
       dashboard.appendChild(foodDiv);
       const foodh3 = document.createElement("h3");
       foodh3.textContent = 'Food Total:';
       foodDiv.appendChild(foodh3);
       const foodp = document.createElement("p");
       foodp.textContent = d.food;
       foodDiv.appendChild(foodp);

       const transpoDiv = document.createElement("div");
       transpoDiv.classList.add("content");
       dashboard.appendChild(transpoDiv);
       const transpoh3 = document.createElement("h3");
       transpoh3.textContent = 'Transpo Total:';
       transpoDiv.appendChild(transpoh3);
       const transpop = document.createElement("p");
       transpop.textContent = d.transpo;
       transpoDiv.appendChild(transpop);

       const housingDiv = document.createElement("div");
       housingDiv.classList.add("content");
       dashboard.appendChild(housingDiv);
       const housingh3 = document.createElement("h3");
       housingh3.textContent = 'Housing Total:';
       housingDiv.appendChild(housingh3);
       const housingp = document.createElement("p");
       housingp.textContent = d.housing;
       housingDiv.appendChild(housingp);

       const educDiv = document.createElement("div");
       educDiv.classList.add("content");
       dashboard.appendChild(educDiv);
       const educh3 = document.createElement("h3");
       educh3.textContent = 'Education Total:';
       educDiv.appendChild(educh3);
       const educp = document.createElement("p");
       educp.textContent = d.educ;
       educDiv.appendChild(educp);

       const healthDiv = document.createElement("div");
       healthDiv.classList.add("content");
       dashboard.appendChild(healthDiv);
       const healthyh3 = document.createElement("h3");
       healthyh3.textContent = 'Healthcare Total:';
       healthDiv.appendChild(healthyh3);
       const healthp = document.createElement("p");
       healthp.textContent = d.health;
       healthDiv.appendChild(healthp);

       const othersDiv = document.createElement("div");
       othersDiv.classList.add("content");
       dashboard.appendChild(othersDiv);
       const othersH3 = document.createElement("h3");
       othersH3.textContent = `Others Total:`;
       othersDiv.appendChild(othersH3);
       const othersp = document.createElement("p");
       othersp.textContent = d.others;
       othersDiv.appendChild(othersp);


   }
   async function dashboardAPICallerWrapper(){
    try{
       const dashboard = await dashboardAPICaller();
       if(!dashboard.success && !dashboard.dashboard && dashboard.forErrorBox){
          dashboardErrorBox.classList.add("showing");
          overlay.classList.add("active");
          return;
       }
       dashboardRenderer(dashboard);
    }catch(err){
       dashboardErrorBox.classList.add("showing");
       overlay.classList.add("active");
    }
   }

   dashboardBTn.addEventListener("click", ()=>{
        sidebar.classList.remove("opened");
        openSidebarBTN.classList.remove("hide");
        bodyElement.classList.remove("sidebar-opened");
        dashboardAPICallerWrapper();
   });

   closeDashboardErrorBox.addEventListener("click", ()=>{
       dashboardErrorBox.classList.remove("showing");
       overlay.classList.remove("active");
   })



   confirmEditExpense.addEventListener("click", async ()=>{
    let hasError = false;
    if(nameInputEdit.value.trim() === ""){
        nameErrorEdit.textContent = "Please type a proper new purchase name!";
        nameErrorEdit.classList.add("errored");
        hasError = true;
    }
    if(dayInputEdit.value.trim() === ""){
        dayErrorEdit.textContent = "Please choose a proper new purchase date!";
        dayErrorEdit.classList.add("errored");
        hasError = true;
    }
    if(amountInputEdit.value.trim() === "" || isNaN(Number(amountInputEdit.value.trim())) || Number(amountInputEdit.value.trim()) < 0){
        amountInputEdit.value = "";
        amountErrorEdit.textContent = "Please type a proper new purchase amount!";
        amountErrorEdit.classList.add("errored");
        hasError = true;
    }
    if(categoryInputEdit.value.trim() === ""){
        categoryErrorEdit.textContent = "Please choose a proper new purchase category !";
        categoryErrorEdit.classList.add("errored");
        hasError = true;
    }
     if (!categories.includes(categoryInputEdit.value.trim())) {
         categoryErrorEdit.textContent =
        "Choose a proper new purchase category!";
         categoryErrorEdit.classList.add("errored");
         categoryInputEdit.value = "";
        hasError = true;
    }
    if(hasError)return;
    const name = nameInputEdit.value.trim();
    const day = dayInputEdit.value;
    const amount = Number(amountInputEdit.value.trim());
    const category = categoryInputEdit.value.trim();

    try{
        console.log("Confirm button ID:", confirmEditExpense.dataset.id);

        const editing = await editExpenseAPICaller(name, day, amount, category, confirmEditExpense.dataset.id);
        if(!editing.success && !editing.edited && !editing.forErrorBox){
            editErrorBox.classList.add("showing");
            overlay.classList.add("active");
            editExpenseBox.classList.remove("show");
            confirmEditExpense.removeAttribute("data-id");
            nameErrorEdit.textContent = "";
            nameErrorEdit.classList.remove("errored");
            dayErrorEdit.textContent = "";
            dayErrorEdit.classList.remove("errored");
            amountErrorEdit.textContent = "";
            amountErrorEdit.classList.remove("errored");
            categoryErrorEdit.textContent = "";
            categoryErrorEdit.classList.remove("errored");
            list2.innerHTML = "";
            list2.classList.remove("using");
            dayInputEdit.value = "";
            nameInputEdit.value = "";
            amountInputEdit.value = "";
            categoryInputEdit.value = "";
            return;
        }
        await getExpenseWrapper();
    }catch(err){
        editErrorBox.classList.add("showing");
        overlay.classList.add("active");
        editExpenseBox.classList.remove("show");
        confirmEditExpense.removeAttribute("data-id");
        nameErrorEdit.textContent = "";
        nameErrorEdit.classList.remove("errored");
        dayErrorEdit.textContent = "";
        dayErrorEdit.classList.remove("errored");
        amountErrorEdit.textContent = "";
        amountErrorEdit.classList.remove("errored");
        categoryErrorEdit.textContent = "";
        categoryErrorEdit.classList.remove("errored");
        list2.innerHTML = "";
        list2.classList.remove("using");
        dayInputEdit.value = "";
        nameInputEdit.value = "";
        amountInputEdit.value = "";
        categoryInputEdit.value = "";
        return;
    }


    editExpenseBox.classList.remove("show");
    overlay.classList.remove("active");
    confirmEditExpense.removeAttribute("data-id");
    nameErrorEdit.textContent = "";
    nameErrorEdit.classList.remove("errored");
    dayErrorEdit.textContent = "";
    dayErrorEdit.classList.remove("errored");
    amountErrorEdit.textContent = "";
    amountErrorEdit.classList.remove("errored");
    categoryErrorEdit.textContent = "";
    categoryErrorEdit.classList.remove("errored");
    list2.innerHTML = "";
    list2.classList.remove("using");
    dayInputEdit.value = "";
    nameInputEdit.value = "";
    amountInputEdit.value = "";
    categoryInputEdit.value = "";

   });

   cancelEditExpense.addEventListener("click", ()=>{
      editExpenseBox.classList.remove("show");
      overlay.classList.remove("active");
      confirmEditExpense.removeAttribute("data-id");
      nameErrorEdit.textContent = "";
      nameErrorEdit.classList.remove("errored");
      dayErrorEdit.textContent = "";
      dayErrorEdit.classList.remove("errored");
      amountErrorEdit.textContent = "";
      amountErrorEdit.classList.remove("errored");
      categoryErrorEdit.textContent = "";
      categoryErrorEdit.classList.remove("errored");
      dayInputEdit.value = "";
      nameInputEdit.value = "";
      amountInputEdit.value = "";
      categoryInputEdit.value = "";
      list2.innerHTML = "";
      list2.classList.remove("using");

   })

   closeDeleteErrorBox.addEventListener("click", ()=>{
        deleteErrorBox.classList.remove("showing");
        overlay.classList.remove("active");
              
   });

   closeEditErrorbox.addEventListener("click", ()=>{
       editErrorBox.classList.remove("showing");
       overlay.classList.remove("active");
   });


   async function getExpenseWrapper (){
     try{
      const expenses = await getExpensesAPICaller();
      if(!expenses.success && expenses.forErrorBox && !expenses.getExpenses){
        getExpensesErrorBox.classList.add("showing");
        overlay.classList.add("active");
        return;
      }
      expensesRenderer(expenses.rows);
      
      
    }catch(err){
        getExpensesErrorBox.classList.add("showing");
        overlay.classList.add("active");
        return;
    }
   }

   if(status === 'logged-in'){
     mainElement.classList.add("hide");
     bodyElement.classList.add("logged-in");
     sidebar.classList.add("open");
     loginDiv.classList.add("logged-in-mode");
     navDesktop.classList.add("hide");
     signupBoxShowDesktop.classList.add("hide");
     signupBoxShowMobile.classList.add("hide");
     loginBoxShowDesktop.classList.add("hide");
     loginBpxShowMobile.classList.add("hide");
     featuresBTN.classList.add("hide");
     footerBTN.classList.add("hide");
     menu.classList.add("logged-in");
     openSidebarBTN.classList.add("logged-in");
     getExpenseWrapper();
   }

   closeGetExpensesErrorBox.addEventListener("click", ()=>{
       getExpensesErrorBox.classList.remove("showing");
       overlay.classList.remove("active");
   });

   function expensesRenderer(arr){
     loginDiv.innerHTML = "";
     loginDiv.classList.add("view-expenses");
     const title = document.createElement("h2");
     title.textContent = 'Expenses';
     loginDiv.appendChild(title);
     const expensesContainer = document.createElement("div");
     expensesContainer.classList.add("expenses-container");
     loginDiv.appendChild(expensesContainer);
     loginDiv.classList.remove("dashboard");
     loginDiv.classList.remove("rankings");
     arr.forEach((a)=>{
        
        const expense = document.createElement("div");
        expensesContainer.appendChild(expense);
        expense.classList.add("expense");
        const top = document.createElement("div");
        expense.appendChild(top);
        top.classList.add("expenses-top");
        const expense_name = document.createElement("p");
        expense_name.textContent = a.name;
        top.appendChild(expense_name);
        const bottom = document.createElement("div");
        bottom.classList.add("expense-bottom");
        expense.appendChild(bottom);
        const day = document.createElement("p");
        const day2 = new Date(a.day).toLocaleDateString();
        day.textContent = `Date: ${day2}`;
        bottom.appendChild(day);
        const amount = document.createElement("p");
        amount.textContent = `Amount: ${a.amount} pesos`;
        bottom.appendChild(amount);
        const category = document.createElement("p");
        category.textContent = `Category: ${a.category}`;
        bottom.appendChild(category);
        const btn_div = document.createElement("div");
        btn_div.classList.add("buttons");
        expense.appendChild(btn_div);
        const editbtn = document.createElement("div");
        editbtn.classList.add("action-btn");
        editbtn.dataset.id = a.expenseid;
        editbtn.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>`;
        btn_div.appendChild(editbtn);
        const deletebtn = document.createElement("div");
        deletebtn.classList.add("action-btn");
        deletebtn.dataset.id = a.expenseid;
        deletebtn.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`
        btn_div.appendChild(deletebtn);
        deletebtn.addEventListener("click", async ()=>{
            try{

            
           const deleting = await deleteExpenseAPICaller(deletebtn.dataset.id);
           if(!deleting.success && !deleting.deleted && !deleting.forErrorBox){
              deleteErrorBox.classList.add("showing");
              overlay.classList.add("active");
              return
              
           }
            await getExpenseWrapper();
        }catch(err){
           deleteErrorBox.classList.add("showing");
           overlay.classList.add("active");
           return
        }
       
        });

        editbtn.addEventListener("click", ()=>{
            editExpenseBox.classList.add("show");
            overlay.classList.add("active");
            confirmEditExpense.dataset.id = editbtn.dataset.id;
        })

    });



   }

   getExpensesBTN.addEventListener("click", async ()=>{
    try{
      const expenses = await getExpensesAPICaller();
      if(!expenses.success && expenses.forErrorBox && !expenses.getExpenses){
        getExpensesErrorBox.classList.add("showing");
        overlay.classList.add("active");
        return;
      }
      expensesRenderer(expenses.rows);
      sidebar.classList.remove("opened");
      openSidebarBTN.classList.remove("hide");
      bodyElement.classList.remove("sidebar-opened");
      
    }catch(err){
        getExpensesErrorBox.classList.add("showing");
        overlay.classList.add("active");
        return;
    }
   });
   
   categoryInput.addEventListener("click", ()=>{
    list.classList.add("using");
    list.innerHTML = "";
    categories.forEach((c)=>{
        
        const li = document.createElement("li");
        li.textContent = c;
        list.appendChild(li);
        li.addEventListener("click", ()=>{
            categoryInput.value = li.textContent;
            list.innerHTML = "";
            list.classList.remove("using");
            categoryError.textContent = "";
            categoryError.classList.remove("errored");
        })
    })
   });

    categoryInputEdit.addEventListener("click", ()=>{
    list2.classList.add("using");
    list2.innerHTML = "";
    categories.forEach((c)=>{
        
        const li = document.createElement("li");
        li.textContent = c;
        list2.appendChild(li);
        li.addEventListener("click", ()=>{
            categoryInputEdit.value = li.textContent;
            list2.innerHTML = "";
            list2.classList.remove("using");
            categoryErrorEdit.textContent = "";
            categoryErrorEdit.classList.remove("errored");
        })
    })
   });

   closeAddExpenseErrorBox.addEventListener("click", ()=>{
     addExpenseErrorBox.classList.remove("showing");
    overlay.classList.remove("active");
   })




   

   confirmAddExpense.addEventListener("click", async ()=>{
    let hasError = false;
    if(nameInput.value.trim() === ""){
        nameError.textContent = "Please type a proper purchase name!";
        nameError.classList.add("errored");
        hasError = true;
    }
    if(dayInput.value.trim() === ""){
        dayError.textContent = "Please choose a proper date of purchase!";
        dayError.classList.add("errored");
        hasError = true;
    }
    if(amountInput.value.trim() === "" || isNaN(Number(amountInput.value.trim())) || Number(amountInput.value.trim()) < 0){
        amountError.textContent = "Please type a proper purchase amount must be a number greater than 0!";
        amountError.classList.add("errored");
        amountInput.value = "";
        hasError = true;
    }
    if(categoryInput.value.trim() === ""){
        categoryError.textContent = "Please choose a proper purchase category!";
        categoryError.classList.add("errored");
        hasError = true;
    }
    if (!categories.includes(categoryInput.value.trim())) {
         categoryError.textContent =
        "Choose a proper purchase category!";
         categoryError.classList.add("errored");
         categoryInput.value = "";
        hasError = true;
    }
    if(hasError)return;

 

    const name = nameInput.value.trim();
    const day = dayInput.value;
    const amount = Number(amountInput.value.trim());
    const category = categoryInput.value.trim();

    try{
       const adding = await addExpenseAPICaller(name, day, amount, category);
        if(!adding.success && adding.forErrorBox && !adding.validationError){
        addExpenseErrorBox.classList.add("showing");
        overlay.classList.add("active");
        nameError.textContent = "";
        nameError.classList.remove("errored");
        nameInput.value = "";
        dayError.textContent = "";
        dayError.classList.remove("errored");
        dayInput.value = "";
        amountError.textContent = "";
        amountError.classList.remove("errored");
        amountInput.value = "";
        categoryError.textContent = "";
        categoryError.classList.remove("errored");
        categoryInput.value = "";
        list.innerHTML = "";
        list.classList.remove("using");
        addExpenseBox.classList.remove("show");
        return;
       }
       if(adding.validationError && !adding.success && !adding.forErrorBox){
         nameError.textContent = "Type a proper expense name!";
         nameError.classList.add("errored");
         dayError.textContent = "Choose a proper expense date!";
         dayError.classList.add("errored");
         amountError.textContent ="Type a proper expense amount must be a number greater than 0";
         amountError.classList.add("errored");
         categoryError.textContent = "Choose a proper expense category must be within the given options!";
         categoryError.classList.add("errored");
         return;
       }

        try{
      const expenses = await getExpensesAPICaller();
      if(!expenses.success && expenses.forErrorBox && !expenses.getExpenses){
        getExpensesErrorBox.classList.add("showing");
        overlay.classList.add("active");
        return;
      }
      expensesRenderer(expenses.rows);
      sidebar.classList.remove("opened");
      openSidebarBTN.classList.remove("hide");
      bodyElement.classList.remove("sidebar-opened");
      
    }catch(err){
        getExpensesErrorBox.classList.add("showing");
        overlay.classList.add("active");
        return;
    }
    }catch(err){
        console.log(err);
        addExpenseErrorBox.classList.add("showing");
        overlay.classList.add("active");
        return;
    }

    

   

    



    addExpenseBox.classList.remove("show");
    overlay.classList.remove("active");
    nameError.textContent = "";
    nameError.classList.remove("errored");
    nameInput.value = "";
    dayError.textContent = "";
    dayError.classList.remove("errored");
    dayInput.value = "";
    amountError.textContent = "";
    amountError.classList.remove("errored");
    amountInput.value = "";
    categoryError.textContent = "";
    categoryError.classList.remove("errored");
    categoryInput.value = "";
    list.innerHTML = "";
    list.classList.remove("using");
   });


   showAddExpenseBox.addEventListener( "click", ()=>{
    addExpenseBox.classList.add("show");
    overlay.classList.add("active");
    sidebar.classList.remove("opened");
    openSidebarBTN.classList.remove("hide");
    bodyElement.classList.remove("sidebar-opened");
   });

   cancelAddExpense.addEventListener("click", ()=>{
    addExpenseBox.classList.remove("show");
    overlay.classList.remove("active");
    addExpenseBox.classList.remove("show");
    overlay.classList.remove("active");
    nameError.textContent = "";
    nameError.classList.remove("errored");
    nameInput.value = "";
    dayError.textContent = "";
    dayError.classList.remove("errored");
    dayInput.value = "";
    amountError.textContent = "";
    amountError.classList.remove("errored");
    amountInput.value = "";
    categoryError.textContent = "";
    categoryError.classList.remove("errored");
    categoryInput.value = "";
    list.innerHTML = "";
    list.classList.remove("using");
   });



   async function loginAPICallerWrapper(username, password){
    try{
          const loggingin = await loginAPICaller(username, password);
          return loggingin;
    }catch(err){
          loginBox.classList.remove("used");
          overlay.classList.add("active");
          usernameError.textContent = "";
          usernameError.classList.remove("errored");
          passwordError.textContent = "";
          passwordError.classList.remove("errored");
          loginPasswordInput.value = "";
          loginUsernameInput.value= "";
          loginErrorBox.classList.add("showing");
          return null;
    }
   }
   
   confirmLogout.addEventListener("click", async ()=>{
      try{
        const loggingout = await logoutAPICaller();
        if(!loggingout.success && !loggingout.logout && loggingout.forErrorBox){
            confirmLogoutBox.classList.add("showing");
            overlay.classList.add("active");
            confirmLogoutBox.classList.remove("showing");
        }
        if(loggingout.success && loggingout.logout && !loggingout.forErrorBox){
            mainElement.classList.remove("hide");
            bodyElement.classList.remove("logged-in");
            sidebar.classList.remove("open");
            loginDiv.classList.remove("logged-in-mode");
            navDesktop.classList.remove("hide");
            signupBoxShowDesktop.classList.remove("hide");
            signupBoxShowMobile.classList.remove("hide");
            loginBoxShowDesktop.classList.remove("hide");
            loginBpxShowMobile.classList.remove("hide");
            featuresBTN.classList.remove("hide");
            footerBTN.classList.remove("hide");
            menu.classList.remove("logged-in");
            openSidebarBTN.classList.remove("logged-in");
            localStorage.setItem("user-status", "logged-out");
            confirmLogoutBox.classList.remove("showing");
            overlay.classList.remove("active");
            loginDiv.innerHTML = "";
            loginDiv.classList.remove("view-expenses");
            loginDiv.classList.remove("dashboard");
        }

      }catch(err){
        confirmLogoutBox.classList.add("showing");
        overlay.classList.add("active"); 
        confirmLogoutBox.classList.remove("showing");
      
      }
   });

   closeLogoutErrorBox.addEventListener("click", ()=>{
      confirmLogoutBox.classList.remove("showing");
      overlay.classList.remove("active"); 
   })

   logoutBTN.addEventListener("click", ()=>{
      confirmLogoutBox.classList.add("showing");
      overlay.classList.add("active"); 

       
   });
   cancelLogout.addEventListener("click", ()=>{
      confirmLogoutBox.classList.remove("showing");
      overlay.classList.remove("active");  
   })


   closeloginErrorBoxBtn.addEventListener("click", ()=>{
      loginErrorBox.classList.remove("showing");
      overlay.classList.remove("active");
   });
   

   closeSidebar.addEventListener("click", ()=>{
    sidebar.classList.remove("opened");
    openSidebarBTN.classList.remove("hide");
    bodyElement.classList.remove("sidebar-opened");
   })
   
   
   

   openSidebarBTN.addEventListener("click", ()=>{
    sidebar.classList.add("opened");
    openSidebarBTN.classList.add("hide");
    bodyElement.classList.add("sidebar-opened");
   })

   async function getExpensesWrapper(){
     
   }
  
   

   

   

   async function signupAPICallerWrapper(username, password){
       try{
          const registration = await signupAPICaller(username, password);
          return registration;
       }catch(err){
          signupBox.classList.remove("used");
          overlay.classList.add("active");
          signupUsernameError.textContent = "";
          signupUsernameError.classList.remove("errored");
          signupPasswordError.textContent = "";
          signupPasswordError.classList.remove("errored");
          signupUsernameInput.value = "";
          signupPasswordInput.value= "";
          signupErrorBox.classList.add("showing");
          return null;
       }
   }
   okBTN.addEventListener("click", ()=>{
      signupErrorBox.classList.remove("showing");
      overlay.classList.remove("active");
   })

   getStarted.addEventListener("click", ()=>{
    loginBox.classList.add("used");
    overlay.classList.add("active");

   });

   anotherGetStarted.addEventListener("click", ()=>{
    loginBox.classList.add("used");
    overlay.classList.add("active");

   });

   featuresBTN.addEventListener("click", ()=>{
    nav.classList.remove("show");
    overlay.classList.remove("active");
   });

   footerBTN.addEventListener("click", ()=>{
    nav.classList.remove("show");
    overlay.classList.remove("active");
   });

   

   inputs.forEach((i)=>{
    i.addEventListener("input", ()=>{
        usernameError.textContent = "";
        usernameError.classList.remove("errored");
        passwordError.classList.remove("errored");
        passwordError.textContent = "";
        signupUsernameError.textContent = "";
        signupUsernameError.classList.remove("errored");
        signupPasswordError.textContent = "";
        signupPasswordError.classList.remove("errored");
        nameError.textContent = "";
        nameError.classList.remove("errored");
        dayError.textContent = "";
        dayError.classList.remove("errored");
        amountError.textContent = "";
        amountError.classList.remove("errored");
        categoryError.textContent = "";
        categoryError.classList.remove("errored");
        nameErrorEdit.textContent = "";
        nameErrorEdit.classList.remove("errored");
        dayErrorEdit.textContent = "";
        dayErrorEdit.classList.remove("errored");
        amountErrorEdit.textContent = "";
        amountErrorEdit.classList.remove("errored");
        categoryErrorEdit.textContent = "";
        categoryErrorEdit.classList.remove("errored");
    });
   });

   signupBTN.addEventListener("click", async ()=>{
    let hasError = false;
    if(signupUsernameInput.value.trim() === ""){
        signupUsernameError.textContent = "Please type a proper username for your account!";
        signupUsernameError.classList.add("errored");
        hasError = true;
    }
    if(signupPasswordInput.value.trim() === ""){
        signupPasswordError.textContent = "Please type a proper password for your account!";
        signupPasswordError.classList.add("errored");
        hasError = true;
    }
    if(hasError)return;
    const username = signupUsernameInput.value.trim();
    const password = signupPasswordInput.value.trim();

    const registration = await signupAPICallerWrapper(username, password);
    if(!registration) return;
    if(registration.userAlreadyExists){
        signupUsernameError.textContent = "This username already exists!";
        signupUsernameError.classList.add("errored");
        signupUsernameInput.value = "";
        return;
    }

    if(registration.validationError){
        signupUsernameError.textContent = "Username must be 3-30 characters and must contain no spaces!";
        signupUsernameError.classList.add("errored");
        signupPasswordError.textContent = "Password must be 8-20 characters and must contain both a capital letter and a number";
        signupPasswordError.classList.add("errored");
        signupUsernameInput.value = "";
        signupPasswordInput.value = "";
        return;
    }

    if(!registration.signup && !registration.success && registration.forErrorBox){
        signupBox.classList.remove("used");
        overlay.classList.add("active");
        signupUsernameError.textContent = "";
        signupUsernameError.classList.remove("errored");
        signupPasswordError.textContent = "";
        signupPasswordError.classList.remove("errored");
        signupUsernameInput.value = "";
        signupPasswordInput.value= "";
        signupErrorBox.classList.add("showing");
        return;
    }

    if(registration.success && registration.signup){
        mainElement.classList.add("hide");
        bodyElement.classList.add("logged-in");
        sidebar.classList.add("open");
        loginDiv.classList.add("logged-in-mode");
        localStorage.setItem("user-status", "logged-in");
        navDesktop.classList.add("hide");
        signupBoxShowDesktop.classList.add("hide");
        signupBoxShowMobile.classList.add("hide");
        loginBoxShowDesktop.classList.add("hide");
        loginBpxShowMobile.classList.add("hide");
        featuresBTN.classList.add("hide");
        footerBTN.classList.add("hide");
        menu.classList.add("logged-in");
        openSidebarBTN.classList.add("logged-in");
    }

    signupUsernameError.textContent = "";
    signupUsernameError.classList.remove("errored");
    signupPasswordError.textContent = "";
    signupPasswordError.classList.remove("errored");
    signupUsernameInput.value = "";
    signupPasswordInput.value = "";
    signupBox.classList.remove("used");
    overlay.classList.remove("active");
   })

   loginBTN.addEventListener("click", async ()=>{
    let hasError = false;
    if(loginUsernameInput.value.trim() === ""){
        usernameError.textContent = "Please type a proper username!";
        usernameError.classList.add("errored");
        hasError = true;
    }
    if(loginPasswordInput.value.trim() === ""){
        passwordError.textContent = "Please type a proper password!";
        passwordError.classList.add("errored");
        hasError = true;
    }
    if(hasError)return;
    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value.trim();

    const loggingin = await loginAPICallerWrapper(username, password);
    if(!loggingin)return;
    if(loggingin.userDoesNotExists){
        usernameError.textContent = "This user does not exists!";
        usernameError.classList.add("errored");
        loginUsernameInput.value = "";
        loginPasswordInput.value = "";
        return;
    }
    if(loggingin.wrongPassword){
        passwordError.textContent = "Invalid account password!";
        passwordError.classList.add("errored");
        loginPasswordInput.value = "";
        return;
    }
    if(!loggingin.login && !loggingin.success && loggingin.forErrorBox){
         loginBox.classList.remove("used");
         overlay.classList.add("active");
         usernameError.textContent = "";
         usernameError.classList.remove("errored");
         passwordError.textContent = "";
         passwordError.classList.remove("errored");
         loginPasswordInput.value = "";
         loginUsernameInput.value= "";
         loginErrorBox.classList.add("showing");
         return;
    }

    if(loggingin.success && loggingin.login && !loggingin.forErrorBox){
        mainElement.classList.add("hide");
        bodyElement.classList.add("logged-in");
        sidebar.classList.add("open");
        loginDiv.classList.add("logged-in-mode");
        localStorage.setItem("user-status", "logged-in");
        navDesktop.classList.add("hide");
        signupBoxShowDesktop.classList.add("hide");
        signupBoxShowMobile.classList.add("hide");
        loginBoxShowDesktop.classList.add("hide");
        loginBpxShowMobile.classList.add("hide");
        featuresBTN.classList.add("hide");
        footerBTN.classList.add("hide");
        menu.classList.add("logged-in");
        openSidebarBTN.classList.add("logged-in");
    }
    getExpenseWrapper();

    usernameError.textContent = "";
    usernameError.classList.remove("errored");
    passwordError.classList.remove("errored");
    passwordError.textContent = "";
    loginUsernameInput.value = "";
    loginPasswordInput.value = "";
    loginBox.classList.remove("used");
    overlay.classList.remove("active");
    
   });


   loginBoxShowDesktop.addEventListener("click", ()=>{
    loginBox.classList.add("used");
    overlay.classList.add("active");

   });
   loginBpxShowMobile.addEventListener("click", ()=>{
    loginBox.classList.add("used");
    overlay.classList.add("active");
    nav.classList.remove("show");
   });
   cancelBtnLogin.addEventListener("click", ()=>{
    loginBox.classList.remove("used");
    overlay.classList.remove("active");
    usernameError.textContent = "";
    usernameError.classList.remove("errored");
    passwordError.classList.remove("errored");
    passwordError.textContent = "";
    loginUsernameInput.value = "";
    loginPasswordInput.value = "";
   });
   signupBoxShowDesktop.addEventListener("click", ()=>{
     signupBox.classList.add("used");
     overlay.classList.add("active");
   });
    signupBoxShowMobile.addEventListener("click", ()=>{
     signupBox.classList.add("used");
     overlay.classList.add("active");
     nav.classList.remove("show");
   });
   cancelBtnLoginSignup.addEventListener("click", ()=>{
    signupBox.classList.remove("used");
    overlay.classList.remove("active");
    signupUsernameError.textContent = "";
    signupUsernameError.classList.remove("errored");
    signupPasswordError.textContent = "";
    signupPasswordError.classList.remove("errored");
    signupUsernameInput.value = "";
    signupPasswordInput.value= "";
   })


   const observer = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting){
        entries[0].target.classList.add("pop");
       }
    }, {
        threshold: 0.6 
    });
   
   const observer2 = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting){
        entries[0].target.classList.add("slide");
       }
    }, {
        threshold: 0.6 
    });

   const observer3 = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting){
        entries[0].target.classList.add("slide2");
       }
    }, {
        threshold: 0.6 
    });

   const observer4 = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting){
        entries[0].target.classList.add("pop2");
       }
    }, {
        threshold: 0.6 
    });

   const observer5 = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting){
        entries[0].target.classList.add("pop3");
       }
    }, {
        threshold: 0.6 
    });

   const observer6 = new IntersectionObserver((entries)=>{
      entries.forEach((e)=>{
          if(e.isIntersecting){
            e.target.classList.add("showcase");
          }
      });
       
    }, {
        threshold: 0.6 
    });
    const observer7 = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting){
        entries[0].target.classList.add("showed");
       }
    }, {
        threshold: 0.6 
    });
    const observer8 = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting){
        entries[0].target.classList.add("showed2");
       }
    }, {
        threshold: 0.6 
    });

    
    observer.observe(p);
    observer.observe(h2);
    observer.observe(pp);
    observer2.observe(children_one);
    observer3.observe(children_two);
    observer4.observe(claims);
    observer5.observe(make);
    observer6.observe(tres);
    observer6.observe(dos);
    observer6.observe(uno);
    observer7.observe(pic_section);
    observer8.observe(get_started_grid);



   function handler(e){
     if(!e.matches){
        nav.classList.remove("show");
        overlay.classList.remove("active");
        sidebar.classList.remove("opened");
        openSidebarBTN.classList.remove("hide");
        bodyElement.classList.remove("sidebar-opened");
        
     }
   }

   menu.addEventListener("click", ()=>{
    nav.classList.add("show");
    overlay.classList.add("active");
   });
   close_menu.addEventListener("click", ()=>{
    nav.classList.remove("show");
    overlay.classList.remove("active");
   });
   overlay.addEventListener("click", ()=>{
    nav.classList.remove("show");
    overlay.classList.remove("active");
    loginBox.classList.remove("used");
    signupBox.classList.remove("used");
    usernameError.textContent = "";
    usernameError.classList.remove("errored");
    passwordError.classList.remove("errored");
    passwordError.textContent = "";
    loginUsernameInput.value = "";
    loginPasswordInput.value = "";
    signupUsernameError.textContent = "";
    signupUsernameError.classList.remove("errored");
    signupPasswordError.textContent = "";
    signupPasswordError.classList.remove("errored");
    signupUsernameInput.value = "";
    signupPasswordInput.value= "";
    signupErrorBox.classList.remove("showing");
    confirmLogoutBox.classList.remove("showing");
    loginErrorBox.classList.remove("showing");
    addExpenseBox.classList.remove("show");
    addExpenseErrorBox.classList.remove("show");
    overlay.classList.remove("active");
    nameError.textContent = "";
    nameError.classList.remove("errored");
    nameInput.value = "";
    dayError.textContent = "";
    dayError.classList.remove("errored");
    dayInput.value = "";
    amountError.textContent = "";
    amountError.classList.remove("errored");
    amountInput.value = "";
    categoryError.textContent = "";
    categoryError.classList.remove("errored");
    categoryInput.value = "";
    list.innerHTML = "";
    list.classList.remove("using");
    addExpenseErrorBox.classList.remove("showing");
    deleteErrorBox.classList.remove("showing");
    editErrorBox.classList.remove("showing");
    editExpenseBox.classList.remove("show");
    editExpenseBox.classList.remove("show");
    confirmEditExpense.removeAttribute("data-id");
    nameErrorEdit.textContent = "";
    nameErrorEdit.classList.remove("errored");
    dayErrorEdit.textContent = "";
    dayErrorEdit.classList.remove("errored");
    amountErrorEdit.textContent = "";
    amountErrorEdit.classList.remove("errored");
    categoryErrorEdit.textContent = "";
    categoryErrorEdit.classList.remove("errored");
    dayInputEdit.value = "";
    nameInputEdit.value = "";
    amountInputEdit.value = "";
    categoryInputEdit.value = "";
    list2.innerHTML = "";
    list2.classList.remove("using");
    dashboardErrorBox.classList.remove("showing");
    rankingsErrorbox.classList.remove("showing");
    archivedErrorBox.classList.remove("showing");
    getExpensesErrorBox.classList.remove("showing");
    budgetBox.classList.remove("used");
    budgetBox.classList.remove("used");
    overlay.classList.remove("active");
    budgetError.classList.remove("errored");
    budgetError.textContent = "";
    budgetinput.value = "";
    budgetErrorBox.classList.remove("showing");
    reportError.classList.remove("showing");
    
   });

   screen_size.addEventListener("change", handler);
})();