const mongoose = require ('mongoose')
const moment=require('moment')

const UserSchema = new mongoose.Schema({
    Fname : String ,
    Lname : String ,
    email : String ,
    phone :String ,
    password : String ,
    age : String,
    avatar:{
        type : String,
        //default:""
    },
    role: {
        type:String,
        enum:['admin','coach','client'],
        default:'client'  
    } ,
    permissionLevel: {
        type: Number,
        default:1,
      },
      date: {
        type: Date,
        default: moment().format(),
      },
})

module.exports=mongoose.model("user" , UserSchema )