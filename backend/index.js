const express = require("express");
const app = express();
const cors =require("cors");
const connection = require("./database/db");


app.use(express.json());
app.use(cors());

const authRouter = require("./routers/auth.router");
const categoryRouter = require("./routers/category.router");

app.use("/api/auth",authRouter);
app.use("/api/categories",categoryRouter);

connection();

app.get("",(req,res)=>{
    res.json({Message:"API request is succeed"})
})

const port = process.env.PORT||5000;
app.listen(port,()=>console.log("Application is live on http://localhost:5000"));