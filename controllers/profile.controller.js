
const profile = require("../models/profile");



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