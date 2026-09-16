// const cowsay=require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));



const express=require("express");

const app=express();

app.get("/",(req,res)=>{    
    res.send("Hello World");
});
app.get("/home",(req,res)=>{    
    res.send("HomePage");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

console.log("Server is rrrrrrunning on port 3000");