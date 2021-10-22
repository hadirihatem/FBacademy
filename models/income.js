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
    date : String,
    payedOrNot:{
        type : String,
        required :true ,
    }, 
   })

   module.exports=mongoose.model("income" , incomeSchema )