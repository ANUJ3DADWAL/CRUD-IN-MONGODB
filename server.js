const express= require("express");
const studentsRoutes=require("./src/Student/routes")
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("Hello, World!");
})


app.use("/api/students",studentsRoutes);

app.listen(port,()=>{
    console.log("Listening to port no 3000");
})