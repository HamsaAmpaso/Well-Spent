export  function authorize(...roles){
    return (req, res, next) =>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
               success: false,
               message: "Error from centralizzed error middleware!",
               addExpense: false,
               getExpenses: false,
               deleted: false,
               edited: false,
               dashboard: false,
               rankings: false,
               archives: false,
               restore: false,
               budget: false,
               monthlyReport: false
            });
        }
        next();
    }
}