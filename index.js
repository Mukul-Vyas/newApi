const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser')


const app=express();

PORT=3000;

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("Api is working");
})


app.listen(PORT,(req,res)=>{
    console.log(`server running at port${PORT}`);
})