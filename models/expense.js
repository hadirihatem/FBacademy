const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    stadiumRent: String ,
    coachSalaryByHour : String ,
    coachSalaryByMonth:String,
    maintenance:String,
    date:String,
    payedOrNot: String,

})

module.exports = mongoose.model('expense', expenseSchema)