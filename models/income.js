const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({

    Ref:{
        type:String,
        required:true,
    },
    childNbr :{
        type :String,
        required : true ,
    },
    price :{
        type : String,
        required :true ,
    },
    date: {
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm:ss a'),
      },
    payedOrNot:{
        type : String,
        required :true ,
    }, 
   })

   module.exports=mongoose.model("income" , incomeSchema )