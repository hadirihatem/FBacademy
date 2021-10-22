const mongoose = require('mongoose')
require('dotenv').config()

const Connectdb =()=>{
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true , useUnifiedTopology:true } ,(err)=>{
        if(err) {
            throw (err )
        }
        console.log('data base connected ..')
    })
}

module.exports = Connectdb;