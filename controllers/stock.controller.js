const expense = require ('../models/stock')





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