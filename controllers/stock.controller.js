const expense = require ('../models/stock')





exports.insert =(req,res)=>{
  let newstock=new stock(req.body)
  newstock.save()
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

 
//--------get stock ---------

exports.getstock= (req, res) => {
    stock.findById(req.params.stockId)
  
      .then((stock) => {
        if (!stock) {
          return res.status(404).json({ msg: "stock not found" });
        }
        res.status(200).json(stock);
      })
      .catch((err) => {
        res.status(500).json({ msg: "server error" });
      });
  };
  
  //----------update stock--------------------
  
  exports.update = (req, res, next) => {
    stock.findByIdAndUpdate({ _id: req.params.stockId }, req.body).then(() => {
        stock.findOne({ _id: req.params.stockId }).then((stock) => {
        res.send({ stock});
      });
    });
  };
  
  //----------------delete stock -----------------------
  
  exports.delete = (req, res, next) => {
    stock.removeById({ _id: req.params.stockId }, req.body)
      .then(() => {
        res.status(200).send([
          {
            msg: "stock deleted",
          },
        ]);
      })
      .catch(() => res.status(404).send("stock not found"));
  };