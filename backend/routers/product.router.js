const express=require("express");
const router = express.Router();
const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.post("/add",async(req,res)=>{
    try {
        const {name,stock,price,categories}=req.body;

        const productId=new uuidv4();
        let product=new Product({
            _id:productId,
            name:name.toUpperCase(),
            stock:stock,
            price:price,
            categories:categories,
            isActive:true,
            createdDate:new Date()
        })
        await product.save();
        res.json({message:"Product creation is succeed!"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})