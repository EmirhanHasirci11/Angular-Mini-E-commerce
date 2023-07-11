const mongoose=require("mongoose");

const uri="mongodb+srv://mongoDb:123@eticaretdb.pgmguxv.mongodb.net/?retryWrites=true&w=majority";

const connection=()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{console.log("Db Connection is succeed");})
    .catch((err)=>console.log(`an error occured ${err.message}`))
    
}
module.exports=connection;