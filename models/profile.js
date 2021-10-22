const mongoose = require('mongoose')


const ProfilShema = new mongoose.Schema({
    Fname : String ,
    Lname : String ,
    owner : {
       type:mongoose.Types.ObjectId,
       ref : "user"
   }
})

module.exports=mongoose.model("profil" , ProfilShema )