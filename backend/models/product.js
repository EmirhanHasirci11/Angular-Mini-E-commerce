const mongoose = require("mongoose")

const productScheme=mongoose.Schema({
    _id:String,
    name:String,
    imageUrls:Array,
    stock:Number,
    price:Number,
    createdDate:Date,
    isActive:Boolean,
    categories:[{type:String,ref:"Category"}]

});
const Product =mongoose.model("Product",productScheme);

module.exports=Product;