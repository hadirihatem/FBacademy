const mongoose = require('mongoose')
const moment=require('moment')

const expenseSchema = new mongoose.Schema({
    stadiumRent: String ,
    coachSalaryByHour : String ,
    coachSalaryByMonth:String,
    maintenance:String,
   
    payedOrNot: String,
    date: {
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm:ss a'),
      },
})

module.exports = mongoose.model('expense', expenseSchema)