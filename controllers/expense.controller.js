const expense = require ('../models/expense')



exports.insert =(req,res)=>{
  let newExpense=new expense(req.body)
  newExpense.save()
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
 


//--------get expense ---------

exports.getexpense = (req, res) => {
    expense.findById(req.params.expenseId)
  
      .then((expense) => {
        if (!expense) {
          return res.status(404).json({ msg: "expenses not found" });
        }
        res.status(200).json(expense);
      })
      .catch((err) => {
        res.status(500).json({ msg: "server error" });
      });
  };
  
  //----------update expense--------------------
  
  exports.update = (req, res, next) => {
    expense.findByIdAndUpdate({ _id: req.params.expenseId }, req.body).then(() => {
      expense.findOne({ _id: req.params.expenseId }).then((expense) => {
        res.send({ expense});
      });
    });
  };
  
  //----------------delete expense -----------------------
  
  exports.delete = (req, res, next) => {
    expense.removeById({ _id: req.params.expenseId }, req.body)
      .then(() => {
        res.status(200).send([
          {
            msg: "expense deleted",
          },
        ]);
      })
      .catch(() => res.status(404).send("expense not found"));
  };