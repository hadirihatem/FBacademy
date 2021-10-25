const User = require('../models/user')
var jwt =require('jsonwebtoken')
var findByrole= require('../controllers/user.controller')



 exports.authroles=(...roles)=> (req,res,next)=> {

    //roles ['admin','user','coach']
    roles && !roles.includes(req.userId.role,console.log(req.userId.role))?
    
    res.status(401).json("you are not authorized") : 
    next()
}





// exports.permit=(roles)=>{
//   return (req,res,next)=>{
//     let userrole=parseInt(req.jwt.role)
//     let userId=req.jwt.userId
//     if (userrole===roles){
//       return next()
//     }else {
//       return res.status(403).send('you are not authorized')
//     }
//   }
// }


// exports.permit = (requiredPermissionLevel) => {
//     return (req, res, next) => {
//         let userPermissionLevel = parseInt(req.jwt.permissionLevel)
//         let userId = req.jwt.userId;
//         console.log(userPermissionLevel)
//         if (userPermissionLevel > requiredPermissionLevel) {
//             return next();
//         } else {
//             return res.status(403).send('Valid token with invalid permissions');
//         }
//     };
//  };
// exports.permit=(...permittedRoles) =>{
//   // return a middleware
 
//   return (request, response, next) => {
//     const { user } = request
   

//     if (user && permittedRoles.includes(user.role))  {
//       next(); // role is allowed, so continue on the next middleware
//     } else {
     
//       response.status(403).json({message: "Forbidden"}); // user is forbidden
//     }
//   }
// }

// exports.permit=async (req, res, next) => {
//     try {
//       // Get user information by id
//       const User = await user.findById({
//         _id: req.userId,
//       });
//       if (User.role === 'admin')
//       return res.status(400).json({ msg: 'Admin resources access denied' });
//       console.log(User.role)
//       next();
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json({ msg: err.message });
//     }
    
//   };
