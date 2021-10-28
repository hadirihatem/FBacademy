const expense = require ('../models/income')




exports.insert =(req,res)=>{
  let newincome=new income(req.body)
  newincome.save()
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

//--------get income ---------

exports.getincome= (req, res) => {
    expense.findById(req.params.incomeId)
  
      .then((income) => {
        if (!income) {
          return res.status(404).json({ msg: "incomes not found" });
        }
        res.status(200).json(income);
      })
      .catch((err) => {
        res.status(500).json({ msg: "server error" });
      });
  };
  
  //----------update income--------------------
  
  exports.update = (req, res, next) => {
    income.findByIdAndUpdate({ _id: req.params.incomeId }, req.body).then(() => {
        income.findOne({ _id: req.params.incomeId }).then((income) => {
        res.send({ income });
      });
    });
  };
  
  //----------------delete income -----------------------
  
  exports.delete = (req, res, next) => {
    income.removeById({ _id: req.params.incomeId }, req.body)
      .then(() => {
        res.status(200).send([
          {
            msg: "income deleted",
          },
        ]);
      })
      .catch(() => res.status(404).send("income not found"));
  };