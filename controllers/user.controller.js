const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const User = require("../models/user");

//----------register---------------

exports.insert = (req, res) => {
  User.find({ email: req.body.email }).then((users) => {
    if (users.length) {
      return res
        .status(400)
        .send({ errors: [{ msg: "User already exists!" }] });
    }

    let newUser = new User(req.body);

    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        throw err;
      }

      bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
        if (err) {
          throw err;
        }
        newUser.password = hashedPwd;
        newUser.save();

        let payload = {
          userId: newUser._id,
        };
        jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
          if (err) {
            throw err;
          }
          res.send({ token });
        });
      });
    });
  });
};

//----------login----------------------

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      return res
        .status(404)
        .json({ errors: [{ msg: "please register before" }] });
    }

    bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(400).json({ errors: err });
      }
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "PSW wrong" }] });
      } else {
        let payload = {
          userId: user._id,
        };
        jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
          if (err) {
            throw err;
          }
          res.send({ token });
        });
      }
    });
  });
};

//--------get user ---------

exports.getuser = (req, res) => {
  User.findById(req.params.userId)

    .then((user) => {
      if (!user) {
        return res.status(404).json({ msg: "user not found" });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ msg: "server error" });
    });
};




exports.getbyId = (req, res) => {
  User.findById(req.userId)
    .select("-password -__v")
    .then((user) => {
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ msg: "Server Error" });
    });
};





//----------updateUser--------------------

exports.update = (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.userId }, req.body).then(() => {
    User.findOne({ _id: req.params.userId }).then((user) => {
      res.send({ user });
    });
  });
};

//----------------delete user -----------------------

exports.delete = (req, res, next) => {
  User.removeById({ _id: req.params.userId }, req.body)
    .then(() => {
      res.status(200).send([
        {
          msg: "user deleted",
        },
      ]);
    })
    .catch(() => res.status(404).send("user not found"));
};


exports.list = (req, res) => {
  // let limit =
  //   req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  User.find().then((result) => {
    res.status(200).send({
      code: 200,
      status: "success",
      message: "users fetched",
      data: result,
    });
  });
};