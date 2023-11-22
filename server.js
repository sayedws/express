const express=require("express");
const app=express();
const path=require("path");



const now = new Date();
app.use((req,res,next)=>{
    var date = new Date;
    var day = date.getDay();
    var hour = date.getHours();
    if (hour > 12 && hour < 15 && day >= 1 && day <= 6) {
        next();
      } else {
        res.send("<h1>Not available</h1>");
      }

});








const PORT=3000;
app.use(express.static("views"));
app.listen(PORT,err=>err?console.log(err):console.log(`server is successfully runing o PORT ${PORT}`))