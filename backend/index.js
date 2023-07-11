const express = require("express");
const app = express();
const cors =require("cors");

app.use(express.json());
app.use(cors());

app.get("",(req,res)=>{
    res.json({Message:"API request is succeed"})
})

const port = process.env.PORT||5000;

app.listen(port,()=>console.log("Application is live on http://localhost:5000"));