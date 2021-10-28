
const profile = require("../models/profile");



exports.insert =(req,res)=>{
  let newprofile=new profile(req.body)
  newprofile.save()
   .then((result)=>{
     result != undefined
       ? res.status(201).send({
           code: 201,
           status: "success",
           message: "task created successfuly",
           data: result,
         })
       : res.status(400).send({
           code: 400,
           status: "error",
           message: "Invalid task object",
         });
       })
 }

//--------get profile ---------

exports.getprofile = (req, res) => {
    User.findById(req.params.profileId)
  
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({ msg: "profile not found" });
        }
        res.status(200).json(profile);
      })
      .catch((err) => {
        res.status(500).json({ msg: "server error" });
      });
  };
  
  //----------updateprofile--------------------
  
  exports.update = (req, res, next) => {
    profile.findByIdAndUpdate({ _id: req.params.profileId }, req.body).then(() => {
      profile.findOne({ _id: req.params.profileId }).then((profile) => {
        res.send({ profile });
      });
    });
  };
  
  //----------------delete profile -----------------------
  
  exports.delete = (req, res, next) => {
    profile.removeById({ _id: req.params.profileId }, req.body)
      .then(() => {
        res.status(200).send([
          {
            msg: "profile deleted",
          },
        ]);
      })
      .catch(() => res.status(404).send("profile not found"));
  };