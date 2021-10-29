const mongoose = require('mongoose')


const ProfilShema = new mongoose.Schema({
    Fname : String ,
    Lname : String ,
    owner : {
       type:mongoose.Types.ObjectId,
       ref : "user"
   },
   age:String,
   phone:String,
   Coach:{
    type:[{
      type:mongoose.Types.ObjectId,
      ref:"User"
     }],
    default:[],
    },
    Parent:{
        type:[{
          type:mongoose.Types.ObjectId,
          ref:"User"
         }],
        default:[],
        },
        groupe:{
            type:mongoose.Types.ObjectId,
            ref:"Groupe"
          },
})

module.exports=mongoose.model("profil" , ProfilShema )