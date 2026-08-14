const API_URL =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? "http://127.0.0.1:3000"
        : "https://well-spent-5.onrender.com";
export async function signupAPICaller(username, password){
    try{
       const response = await fetch(`${API_URL}/api/signup`, {
         method: "POST",
         credentials: "include",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            username: username,
            password: password
         })
       });

    
    const data = await response.json();
    if (!response.ok) {
        data.forErrorBox = true;
        return data;
    }
    data.forErrorBox = false;
    return data;
    }catch(err){
        console.log("response is not ok in catch block");
        console.log(err);
        return{
            signup: false,
            success: false,
            userAlreadyExists: false,
            validationError: false,
            forErrorBox: true
        }
    }
}
export async function loginAPICaller(username, password){
    try{
        const response = await fetch(`${API_URL}/api/login`, {
            method: "POST",
            credentials: "include",
            headers: {
            "Content-Type": "application/json"
                     },
            body: JSON.stringify({
            username: username,
            password: password
            })
        });
        const data = await response.json();
        if(!response.ok){
            data.forErrorBox = true;
            return data;
        }
        data.forErrorBox = false;
        return data;


    }catch(err){
        console.log(err);
        return{
            login: false,
            success: false,
            userDoesNotExists: false,
            validationError: false,
            wrongPassword: false,
            forErrorBox: true
        }
    }
}

export async function logoutAPICaller(){
    try{
       const response = await fetch(`${API_URL}/api/logout`, {
        method: "GET",
        credentials: "include"
       });
       const data = await response.json();
       if(!response.ok){
        data.forErrorBox = true;
        return data;
       }
       data.forErrorBox = false;
       return data;
    }catch(err){
       console.log(err);
       return {
        success: false,
        logout: false,
        forErrorBox: true
       }
    }
}

export async function refreshAPICaller(){
    try{
        const response = await fetch(`${API_URL}/api/refresh`, {
            method: "POST",
            credentials: "include",
            headers: {
            "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        if(!response.ok){
           return {
            success: false,
            noRefreshToken: false,
            refreshTokenNotMatch: false
           }
        }
        
        return data;

    }catch(err){
        console.log(err);
        return {
            success: false,
            noRefreshToken: false,
            refreshTokenNotMatch: false
        }
    }
}


export async function addExpenseAPICaller(name, day, amount, category){
    try{
       const response = await fetch(`${API_URL}/api/expenses`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            day: day,
            amount: amount,
            category: category
        })
       });

       const data = await response.json();
       if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          const response2 = await fetch(`${API_URL}/api/expenses`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            day: day,
            amount: amount,
            category: category
        })
       });

          const data2 = await response2.json();
          data2.forErrorBox = false;
          console.log("refreshed");
          console.log(response2.status);
          console.log(data2);
          return data2;
       }

       if(!response.ok){
          data.forErrorBox = true;
          return data;
       }
       
       data.forErrorBox = false;
       return data;

    }catch(err){
         console.log(err);
         return {
            success: false,
            addExpense: false,
            forErrorBox: true
         }
    }
}

export async function getExpensesAPICaller(){
    try{
        const response = await fetch(`${API_URL}/api/expenses`, {
            method: "GET",
            credentials: "include",
            headers: {
               "Content-Type": "application/json"
            }

        });
        const data = await response.json();
        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          const response2 = await fetch(`${API_URL}/api/expenses`, {
            method: "GET",
            credentials: "include",
            headers: {
               "Content-Type": "application/json"
            }

        });

          const data2 = await response2.json();
          console.log("refreshed-get-expenses");
          console.log(response2.status);
          console.log(data2);
          data2.forErrorBox = false;
          return data2;
       }

       data.forErrorBox = false;
       return data;

    }catch(err){
        console.log(err);
        return{
            success: false,
            getExpenses: false,
            forErrorBox: true
        }
    }
}

export async function deleteExpenseAPICaller(expenseid){
    try{
        const response = await fetch(`${API_URL}/api/expenses/${expenseid}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();

        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

         const response2 = await fetch(`${API_URL}/api/expenses/${expenseid}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

          const data2 = await response2.json();
          console.log("refreshed-delete-expense");
          console.log(response2.status);
          console.log(data2);
          data2.forErrorBox = false;
          return data2;
       }

       if(!response.ok){
          data.forErrorBox = true;
          return data;
       }
       
       data.forErrorBox = false;
       return data;

    }catch(err){
        console.log(err);
        return{
            success: false,
            deleted: false,
            forErrorBox: true
        }
    }
}

export async function editExpenseAPICaller(name, day, amount, category, expenseid){
    try{
        const response = await fetch(`${API_URL}/api/expenses/${expenseid}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                day: day,
                amount: amount,
                category: category
            })
        });
        const data = await response.json();

        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 = await fetch(`${API_URL}/api/expenses/${expenseid}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                day: day,
                amount: amount,
                category: category
            })
        });

        const data2 = await response2.json();
        console.log("refreshed-delete-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }

        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;

    }catch(err){
        console.log(err);
        return{
            success: false,
            edited: false,
            forErrorBox: true
        }
    }
}
export async function dashboardAPICaller(){
    try{
        const response = await fetch(`${API_URL}/api/dashboard`, {
            method: "GET",
            credentials: "include",
            headers: {
               "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 = await fetch(`${API_URL}/api/dashboard`, {
            method: "GET",
            credentials: "include",
            headers: {
               "Content-Type": "application/json"
            }
        });

        const data2 = await response2.json();
        console.log("refreshed-dashboard-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }

        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;



    }catch(err){
        console.log(err);
        return {
            success: false,
            dashboard: false,
            forErrorBox: true
        }
    }
}

export async function rankingsAPICaller(){
    try{
        const response = await fetch(`${API_URL}/api/rankings`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 = await fetch(`${API_URL}/api/rankings`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data2 = await response2.json();
        console.log("refreshed-rankings-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }
        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;
    }catch(err){
        console.log(err);
        return {
            success: false,
            rankings: false,
            forErrorBox: true
        }
    }
}
export async function archivedAPICaller(){
    try{
        const response = await fetch(`${API_URL}/api/archives`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 = await fetch(`${API_URL}/api/archives`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data2 = await response2.json();
        console.log("refreshed-archives-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }

        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;


    }catch(err){
        console.log(err);
        return {
            success: false,
            archives: false,
            forErrorBox: true
        }
    }
}
export async function restoreExpenseAPICaller(expenseid){
    try{
        const response = await fetch(`${API_URL}/api/archives/${expenseid}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 = await fetch(`${API_URL}/api/archives/${expenseid}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data2 = await response2.json();
        console.log("refreshed-restore-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }
        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;

    }catch(err){
        return {
            success: false,
            restore: false,
            forErrorBox: true
        }
    }
}
export async function updateBudgetAPICaller(budget){
    try{
        const response = await fetch(`${API_URL}/api/budget`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                budget: budget
            })
        });
        const data = await response.json();
        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 = await fetch(`${API_URL}/api/budget`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                budget: budget
            })
        });

        const data2 = await response2.json();
        console.log("refreshed-budget-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }

        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;

    }catch(err){
        return {
            success: false,
            budget: false,
            forErrorBox: true
        }
    }
}
export async function thisMonthReportAPICaller(){
    try{
        const response = await fetch(`${API_URL}/api/report`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 =  await fetch(`${API_URL}/api/report`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data2 = await response2.json();
        console.log("refreshed-budget-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }
        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;

    }catch(err){
        return {
            success: false,
            monthlyReport: false,
            forErrorBox: true
        }
    }
}

export async function getUSersAPICaller(){
    try{
        const response = await fetch(`${API_URL}/api/users`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 =  await fetch(`${API_URL}/api/users`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data2 = await response2.json();
        console.log("refreshed-budget-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }
        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;


    }catch(err){
        return {
            success: false,
            users: false,
            forErrorBox: true
        }
    }
}
export async function banUserAPICaller(userid){
    try{
        const response = await fetch(`${API_URL}/api/users/${userid}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if(data.tokenExpired){
          const refreshing = await refreshAPICaller();
          if(!refreshing.success && !refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && !refreshing.noRefreshToken && refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

          if(!refreshing.success && refreshing.noRefreshToken && !refreshing.refreshTokenNotMatch){
            refreshing.forErrorBox = true;
            return refreshing;
          }

        const response2 =  await fetch(`${API_URL}/api/users/${userid}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data2 = await response2.json();
        console.log("refreshed-budget-expense");
        console.log(response2.status);
        console.log(data2);
        data2.forErrorBox = false;
        return data2;


        }

        if(!response.ok){
          data.forErrorBox = true;
          return data;
        }
       
        data.forErrorBox = false;
        return data;

    }catch(err){
        return {
            success: false,
            ban: false,
            forErrorBox: true
        }
    }
}


