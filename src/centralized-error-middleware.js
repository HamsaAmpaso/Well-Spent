export function centralizedErrorMiddleware(err, req, res, next){
    return res.status(500).json({
        success: false,
        message: "Error from centralizzed error middleware!",
        userAlreadyExists: false,
        accessToken: null,
        refreshToken: null,
        validationError: false,
        login: false,
        signup: false,
        wrongPassword: false,
        userDoesNotExists: false,
        addExpense: false,
        getExpenses: false,
        deleted: false,
        edited: false,
        dashboard: false,
        rankings: false,
        archives: false,
        restore: false,
        budget: false,
        monthlyReport: false,
        users: false,
        ban: false,
        daysChart: false
    });
}