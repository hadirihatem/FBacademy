const mongoose = require('mongoose')

const groupeSchema = new mongoose.Schema({
    child:{
        type:[{
          type:mongoose.Types.ObjectId,
          ref:"profil"
         }],
        default:[],
        },
title:String,


})

module.exports = mongoose.model('groupe', groupeSchema)