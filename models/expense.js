const mongoose = require('mongoose')
const moment=require('moment')

const expenseSchema = new mongoose.Schema({
    stadiumRent: String ,
    coachSalaryByHour : String ,
    coachSalaryByMonth:String,
    maintenance:String,
   
    payedOrNot: String,
    date: {
        type: Date,
        default: moment().format(),
      },
})

module.exports = mongoose.model('expense', expenseSchema)