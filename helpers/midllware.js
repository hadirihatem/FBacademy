
const jwt=require('jsonwebtoken')
const user = require('../models/user')
require('dotenv').config()

module.exports = (req,res,next)=>{
    let token=req.header("auth-token")

    if (!token){
        return res.status(401).json({msg:"YOU ARE NOT AUTHORIZED!"})
    }
  jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
        if (err){
            throw err
        }
        user.findById(payload.userId).then(user=>{
          if(!user)
        return   res.status(404).json({msg:'user not found'})
        req.userId=payload.userId
        next()
        })
        
        
    })
  //  req.user=currentUser
    
}





