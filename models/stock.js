const mongoose =require ('mongoose')

const stockSchema = new mongoose.Schema({
    outfitSize: String,
    Bib:String,
    ball:String,


})

module.exports=mongoose.model("stock" , stockSchema )